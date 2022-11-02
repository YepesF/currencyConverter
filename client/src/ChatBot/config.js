import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../Components/Widgets/Options/Options";

const config = {
  botName: "CurrencyBot",
  initialMessages: [
    createChatBotMessage(
      `Welcome to de Converter Currecy ChatBot, What's your name?`,
      {
        widget: "options",
      }
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
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};
export default config;
