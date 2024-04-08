import ChatBot from "../assets/chatbot.png";
import "../App.css";
import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/src/js/chat-bot.js";
    script.type = "module";
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div>
        <button className="chatbot-toggler">
          <span className="material-symbols-outlined">mode_comment</span>
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="chatbot">
          <h5 className="chatbot-heading">Landscaping Bot</h5>
          <ul className="chatbox">
            <li className="chat incoming">
              <span className="material-symbols-outlined">
                <img
                  src={ChatBot}
                  alt="picture of a robot"
                  width="30"
                  height="30"
                />
              </span>
              <p>
                Gidday!
                <br />
                What would you like to know more about?
                <br />
                <br />
                Please enter one of the options listed below...
                <br />
                <br />- The company and landscaper experience
                <br />- Gardening
                <br />- Paving or tiling
                <br />- Retaining
                <br />- Fencing
                <br />- Get in contact
                <br />- Previous work/portfolio
                <br />- How to use the filter by on the portfolio page
                <br />- Get back to the home page
                <br />- How to use the hamburger menu
              </p>
            </li>
          </ul>
          <div className="chat-input">
            <textarea placeholder="Enter a question..." required></textarea>
            <span id="send-btn" className="material-symbols-outlined">
              send
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
