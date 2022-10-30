import Chatbot from "react-chatbot-kit";
import "./App.css";

import ActionProvider from "./ChatBot/ActionProvider";
import MessageParser from "./ChatBot/MessageParser";
import config from "./ChatBot/config";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;
