Very simple URL shortener built with Node.js, Express, MongoDB, and EJS for the frontend. It shortens a long URL to a short ID for easy sharing. Using the MongoDB TTL feature, each shortened URL expires after 30 minutes.

Features
Shortens long URL
Creates a unique short ID
Deletes expired links after 30 minutes
Stores the visit history
EJS templates for the frontend

Tech Stack
Node.js
Express.js
MongoDB + Mongoose
EJS for the templating

Running the Project
Clone the repo
Navigate to the folder
Install the dependencies with npm install
Start the server using node index.js or nodemon
Go to http://localhost:3000 via your browser

Folder Structure
models-folder has URL schema in it
views-folder has EJS files used for the frontend
controllers folder has functions 
index.js has the main server code
coneection.js has connection with database
service folder has authentication using jwt

i installed packages nodemon express mongoose ejs jsonwebtoken cookie-parser

Make sure either MongoDB is running locally or you can use MongoDB Atlas with a valid connection string
