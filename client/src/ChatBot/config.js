import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../Components/Widgets/Options/Options";
import BotAvatar from "../Components/BotAvatar";

const config = {
  botName: "CurrencyBot",
  initialMessages: [
    createChatBotMessage(
      `Welcome to de Converter Currecy ChatBot, What's your name?`
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#222020",
    },
    chatButton: {
      backgroundColor: "#222020",
    },
  },
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  state: { name: "", amount: "", converted: false },
};
export default config;
