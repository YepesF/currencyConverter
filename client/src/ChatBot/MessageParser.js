import React from "react";
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message > 0) {
      actions.handleConvert(message);
    } else {
      actions.handleHello(message);
    }
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
