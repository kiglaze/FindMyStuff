# FindMyStuff
Web development boot camp project #2

## Team Members:
Zeynep Dayar and Kristin Glaze

## Project Description

This is a full-stack app which helps users to inventory items in their house. A user has to sign up using an email address and a password before they can use the app. Once signed up, the user can log in to the app. On the main page, the rooms in the user's house are displayed along with the items in each room. The user can add new rooms, and can also add items to each room. Items can also be removed. Finally, the user can search for items in their house.  

- Express is used to handle routing. 
- Handlebars is used for rendering the UI pages.
- MySQL is used for storing persistent data.  
- Sequelize is used as the ORM interface to MySQL
- Passport is used for authentication (new technology).
- Bootstrap is used for styling.  
- The app runs on port 3000 locally. 

## SQL Database Structure

The application data is saved in the `find_my_stuff_db` database in three tables:

1. The `Users` table has the fields:
   * **id**: an auto incrementing int that serves as the primary key.
   * **email**: a string that is the login id of the user
   * **name**: a string that holds the name of the user
   * **password**: user's password in hashed form
   
2. The `Rooms` table has the fields:
    * **id**: an auto incrementing int that serves as the primary key.
    * **name**: a string that is the name of the room
    * **name**: a string that is the description of the room
    * **UserId**: the id of the user the room belongs to
    
3. The `Items` table has the fields:
    * **id**: an auto incrementing int that serves as the primary key.
    * **name**: a string that is the name of the item
    * **name**: a string that is the description of the item
    * **UserId**: the id of the room where the item is located
    
The following relationships exist among the three tables:
- A user has many rooms. 
- A room belongs to one user.
- A room has many items in it.
- An item is located (belongs in) one room.         

## API Routes

The app implements the following routes:

   * A GET route to `/`: if the user is logged in, they are sent to the main members page; otherwise they are sent to the login page. 
   * A GET route to `/login`: if the user is logged in, they are sent to the main members page; otherwise they are sent to the login page.
   * A GET route to `/signup`: if the user is logged in, they are sent to the main members page; otherwise they are sent to the sign-up page.
   * A GET route to `/members`: if the user is logged in, they are sent to the main members page; otherwise they are sent to the login page.
   * A POST route to `/api/login`: Logs the user in. If the login is successful, the user is sent to the main members page afterwards.
   * A POST route to `/api/signup`: Creates a new user in the Users database table with the entered info. Then redirects to `POST /api/login`, which logs the user in under the covers, and sends the user to the main members page. 
   * A GET route to `/logout`: Logs out the user and takes them back to the login page.
   * A GET route to `/api/rooms/:id`: Gets the room info for a specific room id. 
   * A POST route to `/api/routes`: Adds a new room to the Rooms database table.  
   * A GET route to `/api/items/:id`: Gets the item info for a specific item id. 
   * A POST route to `/api/items`: Adds a new item to the Items database table. 
   * A DELETE route to `/api/items/:id`: Removes the item with the specific id from the Items database table. 
   * A GET route to `/api/items/name/:name`: Finds all the items whose name matches the name passed in the url, but only those items that are located in rooms belonging to the currently logged in user.  

