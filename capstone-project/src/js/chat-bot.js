import ChatBot from "../assets/chatbot.png";

// const ChatbotFunction = () => {
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatToggler = document.querySelector(".chatbot-toggler");

let userMessage;
let inputInitHeight = chatInput.scrollHeight;

if (chatInput) {
  inputInitHeight = chatInput.scrollHeight;
}

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span class="material-symbols-outlined">
          <img src=${ChatBot} alt="picture of a robot" width="30" height="30" /></span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

// Questions asked and responses returned
const generateResponse = () => {
  const getBotReply = (msg) => {
    const changeToLowerCase = msg.toLowerCase();

    // User Inputs
    const questionOne = ["company", "landscaper", "experience"];
    const questionTwo = ["gardening", "garden"];
    const questionThree = ["paving", "tiling"];
    const questionFour = ["retaining"];
    const questionFive = ["fencing"];
    const questionSix = ["get in contact", "contact"];
    const questionSeven = [
      "previous work/portfolio",
      "previous work",
      "portfolio",
    ];
    const questionEight = ["filter", "portfolio page"];
    const questionNine = ["get back", "back", "home page"];
    const questionTen = ["hamburger menu", "menu"];

    if (questionOne.some((word) => changeToLowerCase.includes(word))) {
      return "Click on the 'About' navigation item or scroll to the About section on the Home Page.";
    } else if (questionTwo.some((word) => changeToLowerCase.includes(word))) {
      return "Click on the 'Gardening' navigation item or scroll to the Gardening section on the Home Page. There will be information about gardening and links in this section to gardening stores with a variety of products and plants used by Landshapez.";
    } else if (questionThree.some((word) => changeToLowerCase.includes(word))) {
      return "Click on the 'Paving/Tiling' navigation item or scroll to the Paving/Tiling section on the Home Page. There will be information about paving, tiling and links in this section to stores with a variety of paving and tiling used by Landshapez.";
    } else if (questionFour.some((word) => changeToLowerCase.includes(word))) {
      return "Click on the 'Retaining' navigation item or scroll to the Retaining section on the Home Page. There will be information about retaining and links in this section to a store with a variety of retaining products used by Landshapez.";
    } else if (questionFive.some((word) => changeToLowerCase.includes(word))) {
      return "Click on the 'Fencing' navigation item or scroll to the Fencing section on the Home Page. There will be information about fencing and links in this section to a store with a variety of fencing products used by Landshapez.";
    } else if (questionSix.some((word) => changeToLowerCase.includes(word))) {
      return "Click on the 'Contact' navigation item or scroll to the Contact section on the Home Page. There will be a link that takes you to your mailing system with the landscaper’s email address filled out in the 'To' field. There is also a phone number located in this section. You can also fill out the Enquiry Form, which emails specific information about the service you require to Andy.";
    } else if (questionSeven.some((word) => changeToLowerCase.includes(word))) {
      return "Click on the 'Portfolio' navigation item or the 'View Portfolio' button in the Portfolio section. This will take you to a different page with an overview of landscaping work that has been completed and a filter section to choose the images you want to see.";
    } else if (questionEight.some((word) => changeToLowerCase.includes(word))) {
      return "Click on the 'Filter By' category buttons, which will filter the images based on the category. The categories are: All, Gardening, Paving/Tiling, Retaining and Fencing.";
    } else if (questionNine.some((word) => changeToLowerCase.includes(word))) {
      return "Click on the 'Home' button at the bottom of the page or use the hamburger menu/navigation bar to return to the home page.";
    } else if (questionTen.some((word) => changeToLowerCase.includes(word))) {
      return "Click on the hamburger icon to expand the menu and select the section or page that you would like to navigate to.";
    } else {
      return "I'm sorry, I didn't catch that...";
    }
  };

  // Get the bot's response based on the user's message
  const botResponse = getBotReply(userMessage);

  // Create a chat <li> element for the bot's response
  const botResponseLi = createChatLi(botResponse, "incoming");

  // Append the bot's response to the chatbox
  chatbox.appendChild(botResponseLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display chabot message while it is processing
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

if (chatInput) {
  chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
  });

  chatInput.addEventListener("keydown", (e) => {
    // If the Enter key is pressed without Shift and the window width
    // is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  });
}

if (chatToggler) {
  chatToggler.addEventListener("click", () =>
    document.body.classList.toggle("show-chatbot")
  );
}

if (sendChatBtn) {
  sendChatBtn.addEventListener("click", handleChat);
}
// };

// export default ChatbotFunction;
