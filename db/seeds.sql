INSERT INTO users (username, name, passhash) values ("kiglaze", "KIG", "asdfasdfasdf");
INSERT INTO users (username, name, passhash) values ("zdayar", "Zeynep", "qwertyqwerty");
select * from users;

INSERT INTO rooms (user_id, name, description) values (1, "living room", "the main living room area with the wooden floor");
INSERT INTO rooms (user_id, name, description) values (1, "kitchen", "used for cooking");
INSERT INTO rooms (user_id, name, description) values (1, "storage room", "the storage room");
INSERT INTO rooms (user_id, name, description) values (2, "living room", "the main living room area with the tile floor");

SELECT * FROM rooms;

INSERT INTO storage_areas (room_id, name, description) values (1, "storage ottoman", "the black leather storage ottoman");
INSERT INTO storage_areas (room_id, name, description) values (2, "cabinets over the stove", "cabinets over the stove");
SELECT * FROM storage_areas;
