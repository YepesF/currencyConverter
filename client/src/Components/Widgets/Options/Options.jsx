import React from "react";

import "./Options.css";

const Options = ({ actions }) => {
  const options = [
    {
      text: "Yes",
      handler: () => {
        actions.aH();
      },
      id: 1,
    },
    {
      text: "No",
      handler: () => {
        console.log("No");
      },
      id: 2,
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