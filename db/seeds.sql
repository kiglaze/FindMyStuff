INSERT INTO users (email, name, passhash) values ("kiglaze@gmail.com", "KIG", "asdfasdfasdf");
INSERT INTO users (email, name, passhash) values ("zdayar@gmail.com", "Zeynep", "qwertyqwerty");
SELECT * FROM users;

INSERT INTO rooms (UserId, name, description) values (1, "living room", "the main living room area with the wooden floor");
INSERT INTO rooms (UserId, name, description) values (1, "kitchen", "used for cooking");
INSERT INTO rooms (UserId, name, description) values (1, "storage room", "the storage room");
INSERT INTO rooms (UserId, name, description) values (2, "living room", "the main living room area with the tile floor");

SELECT * FROM rooms;