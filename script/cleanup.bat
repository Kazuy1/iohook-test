@echo off
IF EXIST node_modules (
    echo Delete node_modules...
      rd /Q /S node_modules
)
IF EXIST package-lock.json (
    echo Delete package-lock.json...
      del package-lock.json
)
echo Clear npm cache...
call npm cache verify --force
echo Running npm install...
call npm install
echo Update package.json
abi.bat