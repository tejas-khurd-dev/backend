import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate  } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  let data = async () => {
    const response = await axios.get("http://localhost:3000/posts")
    console.log(response.data.posts);
    setPosts(response.data.posts)
  };

  let deletePost = (id) =>{
    axios.delete(`http://localhost:3000/posts/${id}`)
    .then((res) => {
      console.log(res)
      alert("Post deleted successfully");
    })
    .catch((err) => {
        console.log(err);
        alert("Error deleting post");
    });
  }

  useEffect(()=> {
    data()
  },[]);

  function displayPosts() {
    if (posts.length === 0) {
      return (
        <div className="no-posts-div">
          <h1>No post Available</h1>
        </div>
      )
    } else {
       return (
        <div className="posts-grid">  
          {posts.map((post) => (
            <div className="post-card" key={post._id}>
              <img className="post-image" src={post.image} alt="post" />
              
              <h3 className="post-title">{post.caption}</h3>

              <button
                className="delete-btn"
                onClick={() => deletePost(post._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <div className="posts">
      <h2 className="posts-title">Posts</h2>

      <button 
        className="home-btn"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>

      <div className="dsiplay-post">
        {displayPosts()}
      </div>
    </div>
  );
};

export default Posts;