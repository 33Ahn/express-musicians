const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")
const seedMusician = require("./seedData")

const port = 3000;

// Include necessary middleware for parsing data provided in the request of the body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// TODO
app.get("/musicians", async (request, response) => {
    const allMusicians = await Musician.findAll();
    response.json(allMusicians);
});

app.get("/musicians/:id", async (request, response) => {
    const musician = await Musician.findByPk(request.params.id);
    response.json(musician);    
});

// Create an express route for creating (adding) a new musician on your musician database

app.post("/musicians", async (request, response) => {   
    const newMusician = await Musician.create(request.body);
    response.json(newMusician);    
});

// Create an express route for updating (replacing) an existing musician with a new musician on your musician database based on ID.

app.put("/musicians/:id", async (request, response) => {
    await Musician.update(request.body, {
        where: {id: request.params.id}});
    const updatedMusician = await Musician.findByPk(request.params.id);
    response.json(updatedMusician);
});


// Create an express route for deleting (removing) a musician on your database

app.delete("/musicians/:id", async (request, response) => {
    const musicianId = await Musician.findByPk(request.params.id);
    const deletedMusician = await Musician.destroy(musicianId);

    // It worked this way too.
        // const deletedMusician = await Musician.destroy({where: {
        //     id: request.params.id
        // }});
    response.json(deletedMusician);
})


// Bind the port to my server

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
});