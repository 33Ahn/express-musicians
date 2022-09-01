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
2. Include a Route Parameter id as part of your endpoint;s path/route
3. Reference the Musicians Database and get a musician based on the Route Parameters value
4. Respond as JSON the referenced musician object