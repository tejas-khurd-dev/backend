const express = require("express");
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")
const cors = require("cors")
 
const app = express();

app.use(cors())
app.use(express.json());

// npm i multer
const upload = multer({ storage: multer.memoryStorage() })


// upload.single("image")  --> 'image' is name from form-data
app.post("/create-post", upload.single("image"), async (req, res) => {
  
  const result = await uploadFile(req.file.buffer);
  console.log(result);

  const post = await postModel.create({
      image: result.url,
      caption: req.body.caption,
  })

  return res.status(201).json({
    message: "Post created successfully",
    post: post
  })
  
});

app.get("/posts", async (req,res)=>{
  const posts = await postModel.find();

  res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts,
  })
})


app.delete("/posts/:id", async(req,res)=>{

  const id = req.params.id;

  await postModel.findOneAndDelete({
    _id: id
  });

  res.status(200).json({
    message: "post deleted successfully"
  });

})


module.exports = app;