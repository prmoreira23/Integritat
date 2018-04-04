var router = require("express").Router();

var Document = require("../models/document");

// var middleware = require("../middleware");


// INDEX Route
router.get("/", function(req, res){
    Document.find({}, function(err, docs){
        if(err || docs.length < 1){
            console.log("No documents found!");
            res.render("documents/index");
        } else {
            res.render("documents/index", {documents: docs});
        }
    });
});

// // CREATE Route
// router.post("/", function(req, res){
    
//     var author = {
//         username: req.user.username,
//         id: req.user._id
//     }
    
//     var newDocument = req.body.campground;
//     newDocument.author = author;
    
//     Document.create(newDocument, function(err, doc){
//         if(err){
//             console.log("ERROR!");
//         }
//     });
//     res.redirect("/campgrounds");
// });

// // NEW ROUTE
// router.get("/new", function(req, res){
//     res.render("campgrounds/new", {page_title: "New Campground"});
// });

// // SHOW Route
// router.get("/:id", function(req, res){
//     Document.findById(req.params.id).populate("comments").exec(function(err, campground){
//         if(!err){
//         console.log(campground);
//           res.render("campgrounds/show", {campground: campground, page_title: "New Campground"});
//         }
//     });

// });

// // EDIT Route
// router.get("/:id/edit", function(req, res){
//     Document.findById(req.params.id, function(err, foundCampground){
//         res.render("campgrounds/edit", {campground: foundCampground});
//     });
// });

// // UPDATE Route
// router.put("/:id", function(req, res){
//     Document.findByIdAndUpdate(req.params.id, req.body.campground, function(err, campground){
//         if(err){
//             res.redirect("/campgrounds");
//         } else {
//             res.redirect("/documents/" + req.params.id);
//         }
//     });
// });

// // DELETE ROUTE
// router.delete("/:id/delete", middleware.checkCampgroundOwnership, function(req, res){
//     Document.findByIdAndRemove(req.params.id, function(err){
//         if(err){
//             res.redirect("/documents");
//         } else {
//             res.redirect("/documents");
//         }
//     });
// });

module.exports = router;