CREATE DATABASE find_my_stuff_db;
USE find_my_stuff_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS storage_areas;
DROP TABLE IF EXISTS storage_area_compartments;
DROP TABLE IF EXISTS items;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    username varchar(265) NOT NULL,
    name varchar(265) NOT NULL,
    passhash varchar(265) NOT NULL,
	date TIMESTAMP DEFAULT now(),
	PRIMARY KEY (id)
);

CREATE TABLE rooms (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    name varchar(265) NOT NULL,
    description varchar(265) NULL,
	date TIMESTAMP DEFAULT now(),
	FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,
	PRIMARY KEY (id)
);

CREATE TABLE storage_areas (
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(265) NOT NULL,
    description varchar(265) NULL,
    room_id INT NOT NULL,
	date TIMESTAMP DEFAULT now(),
	FOREIGN KEY (room_id)
        REFERENCES rooms(id)
        ON DELETE CASCADE,
	PRIMARY KEY (id)
);

CREATE TABLE storage_area_compartments (
	id INT NOT NULL AUTO_INCREMENT,
    label varchar(265) NOT NULL,
    description varchar(265) NULL,
    storage_area_id INT NOT NULL,
	date TIMESTAMP DEFAULT now(),
	FOREIGN KEY (storage_area_id)
        REFERENCES storage_areas(id)
        ON DELETE CASCADE,
	PRIMARY KEY (id)
);

CREATE TABLE items (
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(265) NOT NULL,
    description varchar(265) NULL,
    storage_compartment_id INT NOT NULL,
	date TIMESTAMP DEFAULT now(),
	FOREIGN KEY (storage_compartment_id)
        REFERENCES storage_area_compartments(id)
        ON DELETE CASCADE,
	PRIMARY KEY (id)
);
