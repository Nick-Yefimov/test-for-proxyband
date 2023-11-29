import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./userPosts.css";

const UserPosts = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/Nick-Yefimov/test-for-proxyband/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="container">
      <h2>{user && user.username}'s Posts</h2>
      <ul>
        {user &&
          user.posts.map((post) => (
            <li key={post.id}>
              {post.title} - {post.content}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserPosts;
