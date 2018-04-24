var router = require('express').Router();
var Recipes = require('../models/recipe');
var Users = require('../models/user');

// GET ALL RECIPES BY USER
router.get('/api/recipes/users/:userId', (req, res, next) => {
    Recipes.find({userId: req.session.uid}) // FINDS RECIPES TIED TO userId BY SETTING IT TO SESSION ID
        .then(recipes => {
            res.send(recipes);
        })
        .catch(next);
});

// GET ALL PUBLIC RECIPES
router.get('/api/recipes', (req, res, next) => {
    Recipes.find({pub: true})
        .then(recipe => {
            res.send(recipe);
        })
        .catch(next)
})

// GET RECIPE BY RECIPE ID
router.get('/api/recipes/:recipeId', (req, res, next) => {
    Recipes.findById(req.params.recipeId) // FINDS RECIPES TIED TO userId BY SETTING IT TO SESSION ID
        .then(recipe => {
            res.send(recipe);
        })
        .catch(next);
});

// CREATE A RECIPE
router.post('/api/recipes', (req, res, next) => {
    req.body.userId = req.session.uid //GIVES RECIPE USER ID
    Users.findById(req.session.uid)
        .then(user => {
            req.body.user = user.username
            Recipes.create(req.body)
                .then(recipe => {
                    res.send(recipe);
                })
                .catch(next)
        })
        .catch(next);
});

// EDIT A RECIPE -- NEED TO SEND RECIPE USER ID WITH EDIT
router.put('/api/recipes/:recipeId', (req, res, next) => {
    if (req.body.userId != req.session.uid) { // SAFE?
        return res.send("Not Your Recipe")
    } else {
        Recipes.findByIdAndUpdate(req.params.recipeId, req.body)
            .then(recipe => {
                    return res.send(recipe);
            })
            .catch(next);
    }
});

// DELETE A RECIPE
router.delete('/api/recipes/:recipeId', (req, res, next) => {
    Recipes.findById(req.params.recipeId)
        .then(recipe => {
            if (recipe.pub == true || recipe.userId.toString() != req.session.uid) {
                return res.send("Cant Delete Public Recipe")
            } else {
                recipe.remove();
                return res.send('Deleted Recipe!');
            }
        })
        .catch(next);
});



module.exports = router;