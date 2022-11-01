import React from "react";
import axios from "axios";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  let data = { name: "", amount: "" };
  const handleHello = (name) => {
    data = { ...data, name };
    const botMessage = createChatBotMessage(
      `Hello ${name}. What's the amount for convert  to dollars?`
    );
    setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage] }));
  };

  const handleConvert = (amount) => {
    data = { ...data, amount };

    axios.post("http://localhost:3001/convert", data).then((response) => {
      const botMessage = createChatBotMessage(
        `${amount}COP are ${response.data.result}USD`
      );
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    });
  };
  return (
    <div>
      {" "}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleConvert,
          },
        });
      })}{" "}
    </div>
  );
};
export default ActionProvider;
