# Instructions

Test project for Senior Back end developer role of JOI.studio 

## Features
- Nest framework 
- GraphQL
- Prisma(Postgres)
- 🔐 JWT authentication
- REST API docs

## Overview

- [Instructions](#instructions)
  - [Prisma Setup](#prisma-setup)
  - [GraphQL Playground](#graphql-playground)
  - [Rest Api](#rest-api)
  - [Schema Development](#schema-development)

## Prisma Setup

### 1. Install Dependencies

Install Nest CLI to start

```bash
# npm
npm i -g @nestjs/cli

Install the dependencies for the Nest application:

```bash
# npm
npm install

### 2. PostgreSQL with Docker

Setup a development PostgreSQL with Docker. Copy [.env.example](./.env.example) and rename to `.env` - `cp .env.example .env` - which sets the required environments for PostgreSQL such as `POSTGRES_USER`, `POSTGRES_PASSWORD` and `POSTGRES_DB`. Update the variables as you wish and select a strong password.

Start the PostgreSQL database

```bash
docker-compose -f docker-compose.db.yml up -d
# or
npm run docker:db
```

### 2. Prisma Migrate

Prisma Migrate: Prisma datasource requires an environment variable `DATABASE_URL` for the connection to the PostgreSQL database. Prisma reads the `DATABASE_URL` from the root [.env](./.env) file.

1. Creates `migration.sql` file
2. Updates Database Schema
3. Generates Prisma Client

```bash
npx prisma migrate dev
# or
npm run migrate:dev
```

If you like to customize your `migration.sql` file run the following command. After making your customizations run `npx prisma migrate dev` to apply it.

```bash
npx prisma migrate dev --create-only
# or
npm run migrate:dev:create
```

Generate Prisma Client JS by running

> **Note**: Every time you update [schema.prisma](prisma/schema.prisma) re-generate Prisma Client JS

```bash
npx prisma generate
# or
npm run prisma:generate
```

### 3. Seed the database data with this script

Execute the script with this command:

```bash
npm run seed
```

### 4. Start NestJS Server

Run Nest Server in Development mode:

```bash
npm run start

# watch mode
npm run start:dev
```

Run Nest Server in Production mode:

```bash
npm run start:prod
```

GraphQL Playground for the NestJS Server is available here: http://localhost:3000/graphql

**[⬆ back to top](#overview)**

## GraphQL Playground

You have to acquire a JWT token from `signup` or `login`. Add the `accessToken`as followed to **HTTP HEADERS** in the playground and replace `YOURTOKEN` here:

```json
{
  "Authorization": "Bearer YOURTOKEN"
}
```

## Rest Api

[RESTful API](http://localhost:3000/api) documentation available with Swagger.

## Schema Development

Update the Prisma schema `prisma/schema.prisma` and after that run the following two commands:

```bash
npx prisma generate
# or in watch mode
npx prisma generate --watch
# or
npm run prisma:generate
npm run prisma:generate:watch
```

**[⬆ back to top](#overview)**
