# GRAPHQL ARTICLE SERVER

This is the set of starter files for Nathan Thomas' [GraphQL Article](https://hackernoon.com/building-your-first-graphql-server-exbh3wpq). Note that this server does not satisfactorily run on initial clone. You will need to follow along in my article to flesh it out.

## GETTING STARTED

- Fork or clone the repository
- Add a `.env` file. Copy over the contents of the `.env.example` file and then modify it with the following conditions:
  - Create a `PORT` variable with the port number you want to run your server on (the server will default to `8000` if you don't set anything)
  - Make sure to add the `NODE_TLS_REJECT_UNAUTHORIZED='0'` environment variable (you wouldn't want to use this for a real project, but we need it for how I'm having you set this database up fast)
  - Implement a database instance of PostgreSQL somewhere such as Supabase (details in article) and assign the URL for that cluster to `DATABASE_URL` in your `.env` file
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
