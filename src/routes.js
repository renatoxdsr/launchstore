const express = require('express');
//create a variable routes
//This varibles has to be in charge of the Routes of the project
const routes = express.Router();

routes.get('/', function(req, res){
    return res.render("layout.njk");
})


module.exports = routes;