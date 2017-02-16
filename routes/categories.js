var express = require('express');
var router = express.Router();

var Category = require('../models/category.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  Article.getCategories(function(err, categories){
    if(err){
      console.log(err);
    }
    res.json(categories)
  })
});


router.get('/:id', function(req, res, next) {
  Article.getCategoryById(req.params.id, function(err, categories){
    if(err){
      console.log(err);
    }
    res.json(categories)
  })
});

module.exports = router;
