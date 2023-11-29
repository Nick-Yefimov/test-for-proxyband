import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../services/users";

import FilterUsers from "../filterUsers/FilterUsers";
import SearchUsers from "../searchUsers/SearchUsers";

import "./users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    const order = sortOrder === "asc" ? 1 : -1;
    return order * a.username.localeCompare(b.username);
  });

  return (
    <div>
      <h2 className="users__title">Users List</h2>
      <div className="users__box">
        <SearchUsers searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterUsers sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <ul className="users__wrapper">
        {sortedUsers.map((user) => {
          return (
            <li key={user.id} className="users__user">
              <p>{user.username}:</p>
              <div className="users__sort">
                <Link to={`/users/${user.id}/posts`} className="link">
                  Posts
                </Link>
              </div>
              <div>
                <Link to={`/users/${user.id}/albums`} className="link">
                  Albums
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
