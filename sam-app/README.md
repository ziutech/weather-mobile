# Simple backend for a weather app

WIP

## Local development
Requirments:
* AWS SAM CLI
* Node.js 14
* Docker
* api key for https://openweathermap.org/api

```bash
sam build
sam local start-api --paramter-overrides ApiKey=<your api key>
```

Then open `http://localhost:3000/weather?place=<your city name>`.

To change source:
```bash
cd weatherapp/
npm install 
```

