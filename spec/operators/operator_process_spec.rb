# encoding: ascii-8bit

# Copyright 2014 Ball Aerospace & Technologies Corp.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt

require 'spec_helper'
require 'cosmos/operators/operator'

module Cosmos
  describe OperatorProcess do
    describe "start" do
      it "starts the process" do
        spy = spy('ChildProcess')
        expect(spy).to receive(:start)
        expect(ChildProcess).to receive(:build).with('ruby', 'filename.rb', 'DEFAULT__SERVICE__NAME').and_return(spy)

        op = OperatorProcess.new(['ruby','filename.rb','DEFAULT__SERVICE__NAME'], 'DEFAULT')
        op.start
      end
    end
  end
end
