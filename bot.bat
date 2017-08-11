@echo off
color a
title ChronoBot - Simple Discord Selfbot

echo --------------------------------------------------
echo Welcome to ChronoBot, a simple Discord Selfbot by Chronomly and TJDoesCode!
echo This script is to run the bot.
echo If it says \"Error: Module not found"\ make sure to run the install script.
-------------------------------------------------------

call npm -version >NUL 2>&1
if not "%ERRORLEVEL%" == "0" goto nodeErr

:nodeErr
echo ---------------------------------------------------
echo NodeJS was not found. Please install it.
echo https://nodejs.org
echo Be sure to install the "Current" version, NOT the LTS version.
echo The correct version is the button on the right side.
echo ---------------------------------------------------

:start
echo --------------------------------------------------
echo Starting ChronoBot...
echo --------------------------------------------------
call node --harmony chrono.js
goto start
