import React from "react";
import './Usercard.css';

function UserCard({ user }) {
    return (
        <div className="user-card">
            <h3>{user.name.firstname} {user.name.lastname}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong>{user.phone}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Address:</strong>{user.address.number} {user.address.street} {user.address.city} {user.address.zipcode}</p>
            {/* Add more user details here */}
        </div>
    );
}

export default UserCard;
