#!/usr/bin/env bash

# Install Git, Node, etc
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y ntp git nginx nodejs build-essential pm2

#Enable Firewall
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

#Setup nginx
sudo update-rc.d nginx defaults
rm /etc/nginx/sites-enabled/default
cp ./nginx.conf /etc/nginx/sites-available/dustyis
sudo ln /etc/nginx/sites-available/dustyis /etc/nginx/sites-enabled/dustyis
sudo systemctl restart nginx

sudo bash -c 'echo "dusty ALL=(ALL:ALL) NOPASSWD: ALL" | (EDITOR="tee -a" visudo)'
adduser dusty
adduser dusty sudo

