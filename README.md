# CPDirectory
A scalable interface for the Colony Park Directory that will eventually be interactive

# Installation - Raspbian

#Install NPM

sudo apt install npm -y

#Install Node

sudo apt install nodejs -y

#Install MongoDB

sudo apt install mongodb -y

#Start and enable Mongo

sudo service mongodb start
sudo service mongodb enable

#Test server 

cd ./Documents/CPDirectory
node start app.js

<!-- This should result in a successful start up. You should be able to navigate to the site at http://localhost:30495 -->

#Install Forever

npm install forever -g -S

#Install extra server settings to allow no cursor, no sleep, etc...

sudo apt install x11-server-utils, unclutter -y

#Copy autostart settings from autostart.bak to autostart

mv autostart.bak /etc/xdg/lxsession/LXDE-pi/autostart

#Configure LightDM to prevent server from sleeping

sudo nano /etc/lightdm/lightdm.conf

Add or Modify the following line to match the following

xserver-command= X -s 0 -dpms

<!-- in my experience, this command is commented out so just remove the comment and make sure it matches this one.  -->

#That should do it! 

#Just restart your pi and make sure it starts up and displays the web app. Navigate to /tenants to control who is displayed.




