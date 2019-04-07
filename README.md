# DAT GAME

this is a game with node/adonis on backend and react/mobx on frontend

[demo!!!](https://dat-game.herokuapp.com/)


## Requirements

- npm >= 6.4.1
- node >= 9.1.0
- docker
- docker-compose

## Backend setup

start database (mysql)

```bash
docker-compose up
```

install backend
```bash
npm install
```

set env
```bash
cp .env.example .env
```

run database migrations
```bash
node ace migration:run
```

run database seeds
```bash
node ace seed
```

## Start backend

start backend server
```bash
npm start
```

## Frontend setup

move to frontend directory
```bash
cd front 
```

install dependencies
```bash
npm install
```

## Start frontent

start frontend server
```bash
npm start
```


## Deploy on heroku

### Requirements

- heroku cli

### set heroku

Run the following command to the app to git config.

```bash
heroku git:clone -a app-name
```

### deploy
```bash
git push heroku master
```
