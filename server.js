const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")
const seedMusician = require("./seedData")
const port = 3000;

// include a reference to your router in your main express server
const musiciansRouter = require("./routes/musicians");

// Use express router in your main server
app.use("/musicians", musiciansRouter);


// Bind the port to my server
app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
});