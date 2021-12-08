import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll);
  console.log(users);

  const classes = (user) => {
    const baseClass = "badge m-1 bg-";
    return baseClass + user.color;
  };

  const renderPhrase = (number) => {
    let people =
      users.length > 4 || users.length === 1 ? " человек" : " человека";
    let color = users.length > 0 ? "bg-primary" : "bg-danger";
    return (
      <h1 className={"badge fs-4 " + color}>
        {users.length > 0
          ? number + people + " тусанет с тобой сегодня"
          : "Никто с тобой не тусанет"}
      </h1>
    );
  };

  const handleDelete = (userId) => {
    setUsers((prevState) =>
      prevState.filter((user) => {
        return user._id !== userId;
      })
    );
  };
  return (
    <>
      {renderPhrase(users.length)}
      {users.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((qual) => (
                    <span className={classes(qual)} key={qual._id}>
                      {qual.name}
                    </span>
                  ))}
                </td>

                <td key={user.profession._id}>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        false
      )}
    </>
  );
};

export default Users;
