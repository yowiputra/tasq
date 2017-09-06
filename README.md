# tasq
A to-do list web app built on React, Express, Knex, PostgreSQL and Bootstrap. This app lets the user to add people into the 'users' list and add their tasks onto the 'tasks' list.

This app presents the tasks in 2 views:
- A list view where the user can see all the people and their tasks in list form.
- A table view where all the tasks are consolidated into 1 table.

## screenshots
![Screenshot of the homepage](https://github.com/yowiputra/tasq/blob/master/screenshots/homepage.png)

![Screenshot of the user tasks](https://github.com/yowiputra/tasq/blob/master/screenshots/usertasks.png)

![Screenshot of the table view](https://github.com/yowiputra/tasq/blob/master/screenshots/tableview.png)

## instructions
Server side:
- run  `npm install` to install the server dependencies.
- copy the contents of the .env.example file into a .env file. Keep the contents the same.
- assuming you have PostgreSQL setup on your machine, on the terminal, run `psql`.
- in the CLI, create a database with the name "tasq" by using the command `CREATE DATABASE tasq`.
- exit the PostgreSQL CLI by typing `\q`.
- create the tables by running the command `knex migrate:latest`.
- [OPTIONAL] add seed data by running the command `knex seed:run`.

Client side:
- go to the client folder, then run `npm install` to install the front-end dependencies.

Once both sides are setup, run `npm start` to run the app. Go to `localhost:3000` to open the app on the browser.

## dependencies
Server side:
- "body-parser"
- "bookshelf"
- "bookshelf-cascade-delete"
- "concurrently"
- "debug"
- "dotenv"
- "ejs"
- "express"
- "knex"
- "knex-logger"
- "morgan"
- "pg"
- "serve-favicon"

Client side:
- "axios"
- "bootstrap"
- "lodash"
- "react"
- "react-bootstrap"
- "react-dom"
- "react-router-dom"
- "react-scripts"

## bugs
- List item spans escape the ListGroupItem.
