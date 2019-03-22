-- if db exists, drop it --
DROP DATABASE IF EXISTS burgers_db;

-- creates db --
CREATE DATABASE burgers_db;

-- for the code below to use the db --
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);