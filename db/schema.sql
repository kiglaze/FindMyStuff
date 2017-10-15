CREATE DATABASE find_my_stuff_db;
USE find_my_stuff_db;

DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Rooms;
DROP TABLE IF EXISTS Items;

CREATE TABLE Users (
	id INT NOT NULL AUTO_INCREMENT,
    email varchar(265) NOT NULL,
    name varchar(265),
    passhash varchar(265) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Rooms (
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(265) NOT NULL,
    description varchar(265) NULL,
    UserId INT NOT NULL,
	FOREIGN KEY (UserId)
        REFERENCES Users(id)
        ON DELETE CASCADE,
	PRIMARY KEY (id)
);

CREATE TABLE Items (
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(265) NOT NULL,
    description varchar(265) NULL,
    RoomId INT NOT NULL,
	FOREIGN KEY (RoomId)
        REFERENCES Rooms(id)
        ON DELETE CASCADE,
	PRIMARY KEY (id)
);
