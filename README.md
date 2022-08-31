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

