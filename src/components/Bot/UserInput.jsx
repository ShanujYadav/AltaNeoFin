import React from 'react';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    handleChange = (event) => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = () => {
        const { message } = this.state;
        if (message.trim() !== '') {
            this.props.updateUserMessages(message);
            this.setState({ message: '' });
        }
    }

    render() {
        return (
            // <div className="input-container">
            //     <input
            //         id="chat"
            //         type="text"
            //         value={this.state.message}
            //         onChange={this.handleChange}
            //         onKeyPress={(event) => {
            //             if (event.key === 'Enter') {
            //                 this.handleSubmit();
            //             }
            //         }}
            //         placeholder="Type in your message"
            //     />
            //     <button onClick={this.handleSubmit}>Send</button>
            // </div>
            <div></div>
        );
    }
}

export default UserInput;
