const express = require("express");
const { Musician } = require("../Musician"); 
const router = express.Router();  // initialize the express router

// Add middleware to parse body request
router.use(express.json());
router.use(express.urlencoded({extended: true}));

// include check, validationResult methods from the Express Validator package in your Express Router 
const { check, validationResult } = require("express-validator");


// Define Routes
router.get("/", async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
});

router.get("/:id", async (req, res) => {
    const musicianId = await Musician.findByPk(req.params.id);
    res.json(musicianId);
});

router.post("/", 

    [check("name")
        .not()
        .isEmpty()
        .trim(), 

        check("instrument")
            .not()
            .isEmpty()
            .trim(), 

            check("name")
                .isLength({min: 2, max: 20})], 

    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors.array()});
        }  
        const newMusician = await Musician.create(req.body);
        res.json(newMusician);
        // res.json(await Musician.findAll());    
});

router.put("/:id", async (req, res) => {  
    const updatedMusician = await Musician.update(req.body, {where: {id: req.params.id}});      
    res.json(await Musician.findAll());
    // res.json(updatedMusician);   // the output is 1   
});

router.delete("/:id", async (req, res) => { 
    const musicianId = await Musician.findByPk(req.params.id);
    const deletedMusician = await musicianId.destroy();
    res.json(deletedMusician);

     // Or write this way        
    // const deletedMusician = await Musician.destroy({
    //     where: {
    //         id: req.params.id   
    //     }
    // })  
    // res.json(await Musician.findAll());   
    // res.json(deletedMusician); // the outcome is 1
    
});

module.exports = router;