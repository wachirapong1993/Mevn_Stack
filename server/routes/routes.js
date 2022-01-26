const express = require("express");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");


//multer middleware
let storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,"./uploads");
    },
    filename: function(req,file,callback){
        callback(null, file.filename + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer({
    storage: storage,
}).single("image");

router.get("/",API.fetchAllPost);
router.get("/:id",API.fetchPostByID);
router.post("/",upload, API.createPost);
//router.get("")
//router.path("/",API.createPost);
router.patch("/:id",upload,API.updatePost);
router.delete("/:id",API.deletePost);

//router.get("/",(req,res)=>{
   // res.send("Hello World");
//});

module.exports = router;