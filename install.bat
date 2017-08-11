@echo off
color a
title ChronoBot Installation

echo --------------------------------------------------
echo Welcome to ChronoBot, a simple Discord Selfbot by Chronomly and TJDoesCode!
echo This script is to set up the bot.
echo If you have already ran this script, you do not need to again.
echo To run the bot, run bot.bat.
-------------------------------------------------------

cmd /k npm -version >NUL 2>&1
if not "%ERRORLEVEL%" == "0" goto nodeErr

:nodeErr
echo ---------------------------------------------------
echo NodeJS was not found. Please install it.
echo https://nodejs.org
echo Be sure to install the Current version, NOT the LTS version.
echo The correct version is the button on the right side.
echo ---------------------------------------------------


echo ---------------------------------------------------
echo Installing packages...
cmd /k npm install
