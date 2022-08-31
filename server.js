const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")
const seedMusician = require("./seedData")

const port = 3000;

//TODO
app.get("/musicians", async (request, response) => {

    const musicians = await Musician.findAll();  
    const jsonContent = JSON.stringify(musicians);  
    response.send(jsonContent);   
    // console.log(jsonContent); 
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
});