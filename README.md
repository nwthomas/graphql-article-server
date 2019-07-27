# GRAPHQL ARTICLE SERVER

This is the set of starter files for Nathan Thomas' [GraphQL Article]().

## GETTING STARTED

- Fork or clone the repository
- Add a `.env` file with the following conditions
  - Create a `PORT` variable with the port number you want to run your server on (defaults to `8000` if you don't set anything)
  - Implement a database instance of PostgreSQL somewhere such as Heroku and assign the URL for that cluster to `DATABASE_URL` in your .env file
- Install all full dependencies with `yarn` or `npm install` including:

  - `cors`
  - `dotenv`
  - `helmet`
  - `faker`
  - `graphql`
  - `graphql-playground-middleware-express`
  - `knex`
  - `pg`
  - `nodemon`
  - `jest`

- Migrate all tables to your PostgreSQL instance by using the command `npx knex migrate:latest` in the root directory
- Run all seeds to populate dummy data in the database by using the command `npx knex seed:run` in the root directory
- Run `yarn server` or `npm run server` to launch server
