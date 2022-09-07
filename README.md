# express-get-musicians
Using express to GET all the musicians from Musicians DB

## Getting Started

```bash
npm install     # to install dependencies
npm run seed    # to run the seed file
npm start       # to create data in the database
```
## Goal
1. Create a new end point in your server.js file. When a browser makes a GET request to http://localhost:3000/musicians this endpoint should respond with the full array of musician objects.
2. You will be provided with a Musicians DB, aligning with your database being connected to your express server.
3. The endpoint will need to fetch these musicians from the database  -  have a look at the Sequelize Model's findAll() method to help you with this.

            a. remember to use async and await

4. Test your endpoint by visiting http://localhost:3000/musicians  / Your browser should output the array.

## Checklist
1. Create a GET Request using Express
2. Create a route endpoint for "musicians"
3. Get all restaurants via the Musician.findAll() method within the route
4. Send the musicians as a JSON Response( response.json())

# Postman and Route Parameters

## Assignment
Create a new endpoint in your server.js file. When a browser makes a GET request to http://localhost:3000/musicians/1 this endpoint should respond with the object at that specified ID in the URL (in this case, 1). 

You will be provided with a Musicians DB, along with your database being connected to your express server. 

## Goal
1. In the server.js file, begin working after your solution from Get Musicians

2. The endpoint will need to fetch a musician from the database, based on the Router Parameters value - have a look at the Sequelize Model's findByPk() method to help you with this. 

        Remember to use async and await

3. Test your endpoint using Postman: http://localhost:3000/musicians/1, also test out the path for localhost:3000/2 and localhost:3000/3

## Checklist
1. Create an express Get Request to an endpoint for "musicians"
2. Include a Route Parameter id as part of your endpoint's path/route
3. Reference the Musicians Database and get a musician based on the Route Parameters value
4. Respond as JSON the referenced musician object

# CRUD and Middleware
## Assignment
You’ll be making a request to a Musicians Database using different HTTP Verbs to:

1. Add a musician to the Musicians DB

2. Update a musician on the Musicians DB

3. Delete a musician on the Musicians DB

## Goal
In the server.js file, begin working after your solution from Get Musicians 2

1. Create express routes that can post a new musician, update a specific musician, and delete a specific musician from the Musicians DB. -- Remember to use async and await
2. Test your endpoint using Postman and make sure to use the correct HTTP Verb when making your requests to your server.
3. Recall the Sequelize methods that match up with the Express methods for your particular CRUD operation.
## Checklist
1. Include necessary middleware for parsing data provided in the request of the body
2. Create an express route for creating (adding) a new restaurant on your musician database
3. Create an express route for updating (replacing) an existing musician with a new musician on your musician database based on ID.
4. Create an express route for deleting (removing) a musician on your database
5. Test using Postman that you can Create, Read, Update, and Delete data from your database.


### Issues with remote repo: how to delete it and create a new one and copy it
1. create a new repo at GitHub
2. git remote -v
3. git remote add <new remote repo's name> <paste new remote repo's https url>
4. git remote -v
5. git status
6. write something in README file to test
7. git add .
8. git commit -m "somemessage"
9. git push <name of the repo>
10. follow the instruction, most likely the following command
11. git push --set-upstream <name of the repo> main

