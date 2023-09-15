docker stop $(docker ps -q)

cd \dev\myapp

npm run build

xcopy .\build C:\dev\resume-tailor-webapp\public /E /H /C /I /Y

xcopy .\build C:\dev\resume-tailor-webapp\src\main\resources\static /E /H /C /I /Y

cd \dev\resume-tailor-webapp

gradle clean build

docker build -t resumetailor/resume-tailor-webapp:1.1 .

cd \dev\resume-tailor-service

docker compose up