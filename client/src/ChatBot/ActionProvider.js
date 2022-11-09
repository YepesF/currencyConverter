import React from "react";
import axios from "axios";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { name } = children.props.children.props.state;
  const baseURL =
    "https://currencyconverter.up.railway.app" || "http://localhost:3001";

  const handleHello = (name) => {
    setState((prev) => ({
      ...prev,
      name,
    }));
    const botMessage = createChatBotMessage(
      `Hello ${name}. What's the amount for convert  to dollars?`
    );
    addMessageToState(botMessage);
  };

  const handleError = () => {
    const botMessage = createChatBotMessage(
      `The amount is invalid, please enter a number greater a 1`
    );
    addMessageToState(botMessage);
  };

  const handleConvert = async (amount) => {
    let res = false;

    setState((prev) => ({
      ...prev,
      amount,
    }));

    await axios
      .post(`${baseURL}/convert`, { name, amount })
      .then((response) => {
        res = true;
        const botMessage = createChatBotMessage(
          `${amount}COP are ${response.data.result}USD. Do you want convert other currency?.`,
          {
            widget: "options",
          }
        );
        addMessageToState(botMessage);
      })
      .catch(() => {
        const botMessage = createChatBotMessage(
          `Excuse me ${name}, we'll a problem in the application, please retry again. What's the amount for convert  to dollars?`
        );
        addMessageToState(botMessage);
      });

    return res;
  };

  const handleMain = () => {
    const botMessage = createChatBotMessage(
      `Welcome to de Converter Currecy ChatBot, What's your name?`
    );
    setState((prev) => ({
      ...prev,
      messages: [botMessage],
      name: "",
      amount: "",
      converted: false,
    }));
  };

  const handleConfirmation = () => {
    const botMessage = createChatBotMessage(
      `Excuse me I don't understand. Do you want convert other currency?.`,
      {
        widget: "options",
      }
    );
    setState((prev) => ({ ...prev, messages: [botMessage] }));
  };

  const addMessageToState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleConvert,
            handleError,
            handleMain,
            handleConfirmation,
          },
        });
      })}
    </div>
  );
};
export default ActionProvider;
