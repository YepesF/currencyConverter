import React from "react";
const MessageParser = ({ actions, children }) => {
  const { state, setState } = children.props;
  const { name, amount, converted } = state;

  const {
    handleMain,
    handleHello,
    handleConvert,
    handleError,
    handleConfirmation,
  } = actions;

  const parse = async (message) => {
    if (!name && !amount) {
      handleHello(message);
      setState((prev) => {
        return { ...prev, name: message };
      });
    }

    if (name && !amount) {
      if (message > 0) {
        const reponse = await handleConvert(message);
        setState((prev) => {
          return { ...prev, amount: message, converted: reponse };
        });
      }

      if (!Number(message) || message <= 0) {
        handleError();
      }
    }

    if (converted) {
      handleConfirmation();
    }
  };

  return (
    <div>
      {" "}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: { handleMain },
        });
      })}{" "}
    </div>
  );
};
export default MessageParser;
