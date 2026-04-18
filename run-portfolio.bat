@echo off
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File ".\scripts\ensure-dev.ps1"
