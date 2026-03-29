import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">

        <h1 className="home-title">Simple Post App</h1>

        <nav className="nav">
          <Link className="nav-link" to="/create-post">Create Post</Link>
          <Link className="nav-link" to="/posts">Posts</Link>
        </nav>
      </div>

      <Outlet/>
    </>
    
  );
};

export default Home;