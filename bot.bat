@echo off
color a
title ChronoBot - Simple Discord Selfbot

call npm -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto start

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
CMD node --harmony chrono.js
goto start
