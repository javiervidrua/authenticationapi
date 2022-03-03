CREATE TYPE "roles" AS ENUM (
  'regular',
  'admin'
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "role" roles DEFAULT 'regular',
  "verified" boolean DEFAULT false,
  "verification_token" string UNIQUE,
  "created" timestamp DEFAULT (now()),
  "last" timestamp,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "full_name" varchar NOT NULL,
  "address" varchar,
  "city" varchar,
  "postal" varchar,
  "phone" varchar
);

CREATE TABLE "users_groups" (
  "user_id" int,
  "group_id" int,
  "is_admin" boolean DEFAULT false,
  PRIMARY KEY ("user_id", "group_id")
);

CREATE TABLE "groups" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL
);

ALTER TABLE "users_groups" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users_groups" ADD FOREIGN KEY ("group_id") REFERENCES "groups" ("id");