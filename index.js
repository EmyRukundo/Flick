import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import bodyParse from 'body-parser';
import apiRoute from './src/api-routes/api-route.js';
import config from 'config';
import multer from 'multer';
import Post from './src/model/postModel';



const database = config.get('mangoURI');


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/uploads/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  let upload = multer({ storage: storage })

const app = express();
app.use(cors());

app.use(bodyParse.urlencoded({
    extend: true
}));

app.use(bodyParse.json());

mongoose.connect(database, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

let db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

let port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hi with Express"));
app.use('/', apiRoute);

// app.post('/api/post/',  upload.array('photos', 12),function(req,res){
//     let newPost = new Post();
//     newPost.image.data = fs.readFileSync(req.files.path)
//     newPost.image.contentType = 'image/png';
//     newPost.message = req.body;
//     newPost.tag = req.body;
//     newPost.save();
// })

app.post('/api/post/', upload.array('photos', 12),function(req,err){
        let newPost = new Post();
        newPost.image.data = req.body;
        newPost.image.contentType = 'image/png';
        newPost.message = req.body;
        newPost.tag = req.body;
        newPost.save();
        
    if(err){
        console.log( 'bad-ass');
    } else {
        console.log('whatelse')
    }
    })
  


app.listen(port, function() {
  console.log("the started the server", +port);
});
