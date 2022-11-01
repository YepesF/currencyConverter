import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "CurrencyBot",
  initialMessages: [
    createChatBotMessage(
      `Welcome to de Converter Currecy ChatBot, What's your name?`
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};
export default config;
