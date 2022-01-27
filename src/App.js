import React, { useState } from "react";
import Users from "./components/users";
import API from "./api";

function App() {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) =>
      prevState.filter((user) => {
        return user._id !== userId;
      })
    );
  };

  const handleToogleBookmark = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      });
    });
  };

  return (
    <Users
      users={users}
      onDelete={handleDelete}
      onToogleBookmark={handleToogleBookmark}
    />
  );
}

export default App;
