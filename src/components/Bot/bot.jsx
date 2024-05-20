// bot.jsx
import React, { Component } from 'react';
import UserBubble from './UserBubble';
import BotBubble from './BotBubble';
import UserInput from './UserInput';
import './bot.css';

class Bot extends Component {
    constructor(props) {
        super(props);
             
        this.state = {
            userMessages: [],
            botMessages: [],
            botGreeting: 'Hello and welcome to Altaneo, Currently I am under maintenance. Have a quick connect with our relationship manager for personalized solutions and unrivaled support, from the button below.',
            botLoading: false,
            overlayStatus: '',
            timer: {
                minutes: 30,
                seconds: 0,
            },
            isChatOpen: false // Track whether the chat interface is open or closed
        };
    }

    toggleChat = () => {
        this.setState(prevState => ({
            isChatOpen: !prevState.isChatOpen
        }));
    }

    handleQuickConnect = () => {
        window.open('https://meet.google.com/myd-aedb-evd', '_blank');
    }

    // Define the showMessages function to render the conversation messages
    showMessages() {
        const { userMessages, botMessages } = this.state;

        return userMessages.map((message, index) => (
            <div className="conversation-pair" key={'convo' + index}> 
                <UserBubble message={message} key={'u'+index} />
                <BotBubble message={botMessages[index]} key={'b'+index} />
            </div>
        ));
    }

    // Other methods...

    render() {
        const { isChatOpen, botGreeting } = this.state;

        return (
            <div>
                {isChatOpen && (
                    <div id="app-container">
                        <div className="convo-container">
                            <BotBubble message={botGreeting} key="bot-00" />
                            <div className="quick-connect-container">
                                <button className="quick-connect-btn" onClick={this.handleQuickConnect}>Quick Connect</button>
                            </div>
                            {this.showMessages()}
                        </div>
                        <UserInput userMessage={this.state.userMessage} updateUserMessages={this.updateUserMessages} />
                    </div>
                )}
                <button className="chat-toggle" onClick={this.toggleChat}>Chat</button>
            </div>
        );
    }
}

export default Bot;
