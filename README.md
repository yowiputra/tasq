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
- on the terminal, run `pg`.
- create a database with the name "tasq" by using the command `CREATE DATABASE tasq`.
- create the tables by running the command `knex migrate:latest`.
- [OPTIONAL] add seed data by running the command `knex seed:run`.

Client side:
- go to the client folder, then run `npm install` to install the front-end dependencies.

Once both sides are setup, run `npm start` to run the app. Go to localhost:3000 to open the app on the browser.

## dependencies
Server side:
- "body-parser": "^1.17.2"
- "bookshelf": "^0.10.4"
- "bookshelf-cascade-delete": "^2.0.1"
- "concurrently": "^3.5.0"
- "debug": "~2.6.3"
- "dotenv": "^4.0.0"
- "ejs": "^2.5.7"
- "express": "~4.15.2"
- "knex": "^0.13.0"
- "knex-logger": "^0.1.0"
- "morgan": "~1.8.1"
- "pg": "^7.2.0"
- "serve-favicon": "~2.4.2"

Client side:
- "axios": "^0.16.2"
- "bootstrap": "^3.3.7"
- "lodash": "^4.17.4"
- "react": "^15.6.1"
- "react-bootstrap": "^0.31.2"
- "react-dom": "^15.6.1"
- "react-router-dom": "^4.2.2"
- "react-scripts": "1.0.12"

## bugs
- List item spans escape the ListGroupItem.
