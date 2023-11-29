import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "../../pages/userPage/UserPage";
import UserPostsPage from "../../pages/userPostsPage/UserPostsPage";
import UserAlbumsPage from "../../pages/userAlbumsPage/UserAlbumsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/users/:userId/posts" element={<UserPostsPage />} />
        <Route path="/users/:userId/albums" element={<UserAlbumsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
