#!/usr/bin/env python3

# Copyright 2023 OpenC3, Inc.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.

import os
import json
import requests
from openc3.utilities.extract import *
from openc3.script import API_SERVER, OPENC3_IN_CLUSTER
from openc3.environment import OPENC3_SCOPE
from openc3.utilities.logger import Logger
from openc3.utilities.local_mode import LocalMode

os.environ["OPENC3_CLOUD"] = os.environ["OPENC3_CLOUD"] or "local"


# Delete a file on a target
#
# @param [String] Path to a file in a target directory
def delete_target_file(path, scope=OPENC3_SCOPE):
    try:
        # Only delete from the targets_modified
        delete_path = f"{scope}/targets_modified/{path}"
        endpoint = f"/openc3-api/storage/delete/{delete_path}"
        Logger.info(f"Deleting {delete_path}")
        # Pass the name of the ENV variable name where we pull the actual bucket name
        response = API_SERVER.request(
            "delete", endpoint, query={"bucket": "OPENC3_CONFIG_BUCKET"}, scope=scope
        )
        if not response or response.status != 200:
            raise Exception("Failed to delete {delete_path}")
    except Exception as error:
        raise Exception(f"Failed deleting {path} due to {repr(error)}") from error
    return None


# Get a handle to write a target file
#
# @param path [String] Path to a file in a target directory
# @param io_or_string [Io or String] IO object
def put_target_file(path, io_or_string, scope=OPENC3_SCOPE):
    if ".." in path:
        raise Exception(f"Disallowed path modifier '..' found in {path}")

    upload_path = f"{scope}/targets_modified/{path}"

    if os.environ["OPENC3_LOCAL_MODE"] and OPENC3_IN_CLUSTER:
        LocalMode.put_target_file(upload_path, io_or_string, scope=scope)
        # TODO: Python respond_to?
        # if io_or_string.respond_to?(:rewind):
        #   io_or_string.rewind

    endpoint = f"/openc3-api/storage/upload/{upload_path}"
    result = _get_presigned_request(endpoint, scope=scope)
    Logger.info(f"Writing {upload_path}")

    # Try to put the file
    try:
        uri = _get_uri(result["url"])
        with requests.Session() as s:
            result = s.put(
                uri,
                data=io_or_string,
                headers={"Content-Length": str(len(io_or_string))},
            )
            return result.content
            # Net::HTTP.start(uri.host, uri.port) do
            # request = Net::HTTP::Put.new(uri, {'Content-Length' => io_or_string.length.to_s})
            # if String === io_or_string
            #   request.body = io_or_string
            # else
            #   request.body_stream = io_or_string

            # Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == 'https') do |http|
            #   http.request(request) do |response|
            #     response.value() # Raises an HTTP error if the response is not 2xx (success)
            #     return response
    except Exception as error:
        raise Exception(
            f"Failed to write {upload_path} due to {repr(error)}"
        ) from error


# Get a handle to access a target file
#
# @param path [String] Path to a file in a target directory, e.g. "INST/procedures/test.rb"
# @param original [Boolean] Whether to get the original or modified file
# @return [File|None]
def get_target_file(path, original=False, scope=OPENC3_SCOPE):
    part = "targets"
    if not original:
        part += "_modified"
    # Loop to allow redo when switching from modified to original
    while 1:
        try:
            if part == "targets_modified" and os.environ["OPENC3_LOCAL_MODE"]:
                local_file = LocalMode.open_local_file(path, scope=scope)
                if local_file:
                    Logger.info(f"Reading local {scope}/{path}")
                    file = open(path, "wb")
                    file.write(local_file.read())
                    file.close()
                    return file
            return _get_storage_file("{part}/{path}", scope=scope)
        except Exception as error:
            if part == "targets_modified":
                part = "targets"
                # redo
            else:
                raise error


# download_file(path_or_file) is implemented by running_script to download a file

# These are helper methods ... should not be used directly


def _get_storage_file(path, scope=OPENC3_SCOPE):
    # Create Tempfile to store data
    file = open(path, "wb")

    endpoint = f"/openc3-api/storage/download/{scope}/{path}"
    result = _get_presigned_request(endpoint, scope=scope)
    Logger.info(f"Reading {scope}/{path}")

    # Try to get the file
    uri = _get_uri(result["url"])
    with requests.Session() as s:
        response = s.get(uri)
        for chunk in response.iter_content:
            file.write(chunk)
    file.close()
    return file


def _get_uri(url):
    if OPENC3_IN_CLUSTER:
        match os.environ["OPENC3_CLOUD"]:
            case "local":
                return f"http://openc3-minio:9000{url}"
            case "aws":
                return f"https://s3.{os.environ['AWS_REGION']}.amazonaws.com{url}"
            case "gcp":
                return f"https://storage.googleapis.com{url}"
            # when 'azure'
            case _:
                raise Exception(f"Unknown cloud {os.environ['OPENC3_CLOUD']}")
    else:
        return f"{API_SERVER.generate_url}url"


def _get_presigned_request(endpoint, scope=OPENC3_SCOPE):
    if OPENC3_IN_CLUSTER:
        response = API_SERVER.request(
            "get",
            endpoint,
            query={"bucket": "OPENC3_CONFIG_BUCKET", "internal": True},
            scope=scope,
        )
    else:
        response = API_SERVER.request(
            "get", endpoint, query={"bucket": "OPENC3_CONFIG_BUCKET"}, scope=scope
        )
    if not response or response.status != 201:
        raise Exception(f"Failed to get presigned URL for {endpoint}")
    return json.loads(response.body)
