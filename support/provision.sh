#!/usr/bin/env bash

# Install Git, Node, etc

sudo apt-get install libcap2-bin

# Setup User and directories


# Ensure Node can start on port 80
sudo setcap cap_net_bind_service=+ep /usr/local/bin/node