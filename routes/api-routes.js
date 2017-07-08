var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    
    db.Blogs.findAll({
       order: ['id']
    }).then(function(data) {
        var hbsObject = {
      Blog: data
    };
     res.render("index", hbsObject);
    });
  });

  app.get("/classifieds", function(req, res) {
    
    db.Classifieds.findAll({
       order: ['id']
    }).then(function(data) {
        var hbsObject = {
      Classified: data
    };
     res.render("index", hbsObject);
    });
  });

  app.post("/", function(req, res) {
    console.log(req.body);
    db.Blogs.create({
      user: req.body.user,
      blogtitle: req.body.blogtitle,
      blogpost: req.body.blogpost
    }).then(function(data) {
      res.redirect("/");
    });
  });  


// app.put("/:id", function(req, res) {
//     db.burgers.update({
//       devoured: true
//   },{
//     where: {
//       id:req.params.id
//     }
//   }).then(function(data){
//    res.redirect("/");
//   });
// });
} 