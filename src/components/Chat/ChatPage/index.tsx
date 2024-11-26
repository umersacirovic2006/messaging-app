import { useLocation } from "react-router";
import "./index.scss";
import Message from "./healpers/message";
import { useState } from "react";

const ChatPage = () => {
    const location = useLocation();
    const data = location.state;
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessage("");
        }
    };

    return (
        <div className="ChatPage">
            <nav>
                <div className="left">
                    <img src={data.image} alt="img" />
                    <h3>{data.firstName}</h3>
                </div>
                <div className="right">
                    <button>Voice Call</button>
                    <button>Video Call</button>
                </div>
            </nav>

            <div className="chat">
                <Message
                    content="Hey, how are you?"
                    timestamp="10:30 AM"
                    isMe={false}
                    senderName="John"
                />
                <Message
                    content="I'm good, thanks!"
                    timestamp="10:31 AM"
                    isMe={true}
                    senderName="Me"
                />
            </div>

            <div className="input-container">
                <input 
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatPage;