import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Users = () => {
  let { userId } = useParams();
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  return <div></div>;
};

export default Users;
