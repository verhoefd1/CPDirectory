#!/bin/bash
cd /home/pi/Documents/CPDirectory
forever start app.js>>/home/pi/output.log>>/home/pi/error.log
sleep 30
