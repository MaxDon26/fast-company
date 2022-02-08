import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

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
        <div>
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToogleBookmark={handleToogleBookmark}
                />
            )}
        </div>
    );
}

export default App;
