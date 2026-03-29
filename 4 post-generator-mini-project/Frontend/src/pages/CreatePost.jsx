import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreatePost = () => {

  const [title,setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData);
    axios.post("http://localhost:3000/create-post", formData)
    .then((res) => {
        console.log(res)
        alert("Post created successfully");
        e.target.reset();
        navigate("/posts")
    })
    .catch((err) => {
        console.log(err);
        alert("Error creating post");
    });
  }

  return (

    <div className="create-post">

      <h2 className="create-post-title">Create Post</h2>

      <form onSubmit={handleSubmit} className="create-form">

        <input
          type="file"
          name="image"
          accept="image"
          className="input-field"
        />

        <input
          type="text"
          placeholder="Post title"
          className="input-field"
          name="caption"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        

        <button className="submit-btn">
          Submit
        </button>

      </form>

    </div>

  )
}

export default CreatePost