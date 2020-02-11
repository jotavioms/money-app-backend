# todo-app-backend
Back-end for money-app.

## Installation
❯ Install dependencies:

`npm i`

## Starting mongoDB service (both dev and production)

❯ Mac

`brew services start mongodb-community@4.2`

❯ Linux

`sudo service mongod start`

❯ Windows

`mongod`

## Running on development

❯ Start nodemon

`npm run dev`

## Running on production

❯ Start PM2

`npm run production`

### Endpoint
❯ Request

```
http://localhost:3003/api/todos/
```

❯ Response

```
[
  {
    "_id": "5d1fa1b9bc17777fd3be2d9a",
    "description": " Finish my React project",
    "__v": 0,
    "createdAt": "2019-07-05T19:15:05.830Z",
    "done": false
  }
]
```

*Test with urlenconded

### Additional commands
❯ Stop mongoDB service (Mac)

`brew services stop mongodb-community@4.2`

❯ Stop mongoDB service (Linux)

`sudo service mongod stop`

❯ Restart mongoDB service (Windows)

`sudo service mongod stop`

❯ Stop pm2 on production

`./node_modules/.bin/pm2 delete todo-app`
