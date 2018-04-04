# tasq
A to-do list web application built on React, Express, Knex, PostgreSQL and Bootstrap. This app lets the user to add people into the 'users' list and add their tasks onto the 'tasks' list.

This app presents the tasks in two views:
- A list view where the user can see all people and their tasks in a list form.
- A table view where all tasks are consolidated into one table.

## Screenshots
![Screenshot of the homepage](https://github.com/yowiputra/tasq/blob/master/screenshots/homepage.png)

![Screenshot of the user tasks](https://github.com/yowiputra/tasq/blob/master/screenshots/usertasks.png)

![Screenshot of the table view](https://github.com/yowiputra/tasq/blob/master/screenshots/tableview.png)

## Instructions
Server side:
- run  `npm install` to install server's dependencies.
- copy the contents from the .env.example file to a .env file. Keep contents the same.
- assuming you have PostgreSQL setup on your machine, on the terminal, run `psql`.
- in the CLI, create a database with the name "tasq" by using `CREATE DATABASE tasq`.
- exit the PostgreSQL CLI by typing `\q`.
- create the tables by running `knex migrate:latest`.
- [OPTIONAL] add a seed data by running `knex seed:run`.

Client side:
- go to the client folder, then run `npm install` to install the front-end dependencies.

Once both sides are set up, run `npm start` to run the app. Go to `localhost:3000` to open the app on the browser.

## Dependencies
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

## Bugs
- List item spans escape the ListGroupItem.
