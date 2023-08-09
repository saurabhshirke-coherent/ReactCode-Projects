import React, { useEffect, useState } from "react";
import UserCard from "../Usercard";
import '../../App.css';

export default function UserView() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(json => setUsers(json));
    }, []);

    return (
        <div className="user-container">
            <h2>User List</h2>
            <div className="user-list">
                <div className="user-cards">
                    {users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
}
