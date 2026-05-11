# start.ps1
Start-Process powershell -ArgumentList "-NoExit -Command `"cd server; npm run start`""
Start-Process powershell -ArgumentList "-NoExit -Command `"cd client; npm run dev`""
