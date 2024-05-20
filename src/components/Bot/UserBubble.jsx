// UserBubble.jsx
import React from 'react';
import './bot.css'; // Import the styles from bot.css

const UserBubble = ({ message }) => {
    return (
        <div className="chat-bubble user">
            <span>{message}</span>
        </div>
    );
}

export default UserBubble;
