# Project Recipedia

Came up with the idea for a wikipedia for recipes where the public can access and add to the existing database of ingredients
and recipes to share with the world.

## Built With

* [ReactJS](reactjs.org) - The web framework used
* [postgresSQL](https://www.postgresql.org) - Dependency Management
* [bootstrap](https://getbootstrap.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

you will need the following to run this app

```
- NodeJS
- postgresSQL
```
download/clone the repo by accessing your CLI and entering the following

```
git clone https://github.com/datguyrhy/recipe-keep.git
```

### Installing

After downloading the repo you will need to point the CLI terminal to your cloned repo and

install the modules and dependencies by entering the following into your terminal.

```
npm install
```

This will create the tables and seed them within your psql database

## Part 1 - Database / Schema / Models

In this repo are two files `tables.sql` and `seed.sql`.

### Create the database

Create a postgres database called `recipedb`. Make sure to use that **exact**
name, or you'll have trouble later on!

### Create a schema

You will need to run the 2 included sql files to create the corresponding tables and seed them.

```
psql -d dbname -U user -f tables.sql
```
```
psql -d dbname -U user -f seed.sql
```
#Now that you have the tables seeded, you will need to start the app.

to run the app locally enter in the CLI

```
node index.js
```

this will start the app which can be accessed by entering the following into your chrome browser

```
127.0.0.1:3000/ or localhost:3000/
```

This should bring you to the landing page.
![https://i.imgur.com/kka6pko.jpg]
(https://i.imgur.com/kka6pko.jpg)

## Running the app

There is a registration and login feature but this app is designed for public access.

You can still add recipes and ingredients without having to log in.


## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
