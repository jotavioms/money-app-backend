# money-app-backend
Back-end for money-app.

## Install
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

❯ Api

```
http://localhost:3003/api/billingCycles
```

❯ POST

```
name: Janeiro/17
month: 1
year: 2017
credits[0][name]:Salario Empresa
credits[0][value]:6500
credits[1][name]:Salario Professor
credits[1][value]:2700
debts[0][name]:Telefone
debts[0][value]:89.56
debts[0][status]:PAGO
debts[1][name]:Condominio
debts[1][value]:720
debts[1][status]:AGENDADO
```

❯ GET

```
[
  {
    "_id": "5e42fbf80cbd2f2f0deaf78e",
    "name": " Janeiro/17",
    "month": 1,
    "year": 2017,
    "__v": 0,
    "debts": [
      {
        "name": "Telefone",
        "value": 89.56,
        "status": "PAGO",
        "_id": "5e42fbf80cbd2f2f0deaf790"
      },
      {
        "name": "Condominio",
        "value": 720,
        "status": "AGENDADO",
        "_id": "5e42fbf80cbd2f2f0deaf78f"
      }
    ],
    "credits": [
      {
        "name": "Salario Empresa",
        "value": 6500,
        "_id": "5e42fbf80cbd2f2f0deaf792"
      },
      {
        "name": "Salario Professor",
        "value": 2700,
        "_id": "5e42fbf80cbd2f2f0deaf791"
      }
    ]
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
