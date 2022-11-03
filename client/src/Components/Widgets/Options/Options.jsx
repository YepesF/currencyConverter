import React from "react";

import "./Options.css";

const Options = ({ actions }) => {
  const { handleMain } = actions;
  const options = [
    {
      text: "Yes",
      handler: () => {
        handleMain();
      },
      id: 1,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="option-button" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;
