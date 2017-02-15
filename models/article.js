var mongoose =  require('mongoose');

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    require: true
  },
  body: {
    type: String,
    index: true,
    require:true,
  },
  date:{
    type: Date,
    default: Date.now
  }
});

var Article = module.exports = mongoose.model('Article', articleSchema);


//Get all articles
module.exports.getArticles = function(callback){
  Article.find(callback);
}

//Get Article By ID
module.exports.getArticleById = function(id, callback){
  Article.findById(id, callback);
}

//Get Category articles
module.exports.getArticlesByCategory = function(category,callback){
  var query = {category: category};
  Article.find(query, callback);
}
