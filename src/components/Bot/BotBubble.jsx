// BotBubble.jsx
import React from 'react';
import './bot.css'; // Import the styles from bot.css

const BotBubble = ({ message }) => {
    return (
        <div className="chat-bubble bot">
            <span>{message}</span>
        </div>
    );
}

export default BotBubble;
