const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")
const seedMusician = require("./seedData")

const port = 3000;

//TODO
app.get("/musicians/:id", async (request, response) => {

    const musician = await Musician.findByPk(request.params.id);
    response.json(musician);

    // with the route < "/musicians"  >
        // const musicians = await Musician.findAll();  
        // response.json(musicians);
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
});