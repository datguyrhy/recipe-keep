
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  user_name TEXT,
  password TEXT
  );

CREATE TABLE IF NOT EXISTS recipes(
  id SERIAL PRIMARY KEY,
  title TEXT,
  ingredients TEXT,
  instructions TEXT,
  user_id  INTEGER,
  ingredient_id  INTEGER
  );

CREATE TABLE IF NOT EXISTS ingredients(
  id SERIAL PRIMARY KEY,
  ingredient_name TEXT
  );
