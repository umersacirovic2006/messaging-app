
import React from 'react';
import './message.scss';

interface MessageProps {
  content: string;
  timestamp: string;
  isMe: boolean;
  senderName: string;
}

const Message: React.FC<MessageProps> = ({ content, timestamp, isMe, senderName }) => {
  return (
    <div className={`message-container ${isMe ? 'message-right' : 'message-left'}`}>
      <div className="message-bubble">
        {!isMe && <span className="sender-name">{senderName}</span>}
        <p className="message-content">{content}</p>
        <span className="message-timestamp">{timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
