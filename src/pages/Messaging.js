import React from 'react';
import '../styles.css';

function Messaging() {
  return (
    <div className="messaging-container">
      <div className="messages-container">
        <div className="message-bubble">
          <p className="message-text">Hey, how's it going?</p>
        </div>
        <div className="message-bubble">
          <p className="message-text">Not too bad, thanks for asking. How about you?</p>
        </div>
        <div className="message-bubble my-message">
          <p className="message-text">I'm doing great, thanks for asking!</p>
        </div>
        <div className="message-bubble">
          <p className="message-text">That's good to hear. What have you been up to?</p>
        </div>
        <div className="message-bubble my-message">
          <p className="message-text">Not much, just working on some new projects. How about you?</p>
        </div>
        <div className="message-bubble">
          <p className="message-text">Same here, trying to stay busy with work.</p>
        </div>
      </div>
      <div className="chat-box">
        <input type="text" placeholder="Type your message here" className="chat-input" />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}

export default Messaging;
