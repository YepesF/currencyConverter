import React, { useState } from "react";
const MessageParser = ({ children, actions }) => {
  const [data, setData] = useState({
    name: "",
    amount: "",
  });
  const parse = async (message) => {
    const { name, amount } = data;

    if (!name && !amount) {
      actions.handleHello(message);
      setData((prev) => {
        return { ...prev, name: message };
      });
    }

    if (name && !amount) {
      if (message > 0) {
        actions.handleConvert(message);
        setData((prev) => {
          return { ...prev, amount: message };
        });
      }

      if (!Number(message) || message <= 0) {
        actions.handleError();
      }
    }

    // if (message > 0) {
    //   actions.handleConvert(message);
    // } else {
    //   actions.handleHello(message);
    // }
  };
  return (
    <div>
      {" "}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { parse: parse, actions: {} });
      })}{" "}
    </div>
  );
};
export default MessageParser;
