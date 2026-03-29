import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <div className="app-body">

      <Routes>

        <Route path="/" element={<Home />}>
          <Route path="create-post" element={<CreatePost />} />
        </Route>

        <Route path="/posts" element={<Posts />} />

      </Routes>

    </div>
  );
};

export default App;