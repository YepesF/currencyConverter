import React from "react";

import CoBotAvatar from "./bot.svg";

const BotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        <img alt="BotAvatar" src={CoBotAvatar} />
      </div>
    </div>
  );
};

export default BotAvatar;
