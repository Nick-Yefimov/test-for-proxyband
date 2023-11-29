import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./userAlbums.css";

const UserAlbums = () => {
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
      <h2>{user && user.username}'s Albums</h2>
      <ul>
        {user &&
          user.albums.map((album) => (
            <li key={album.id}>
              {album.title}
              <ul>
                {album.photos.map((photo, index) => (
                  <li key={index}>{photo}</li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserAlbums;
