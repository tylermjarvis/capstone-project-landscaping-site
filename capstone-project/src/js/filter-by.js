// const buttons = document.querySelectorAll(".button-value");
// const figure = document.querySelectorAll(".figure-item");
// let i = 0;

// for (i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", (e) => {
//     e.preventDefault();

//     const filter = e.target.dataset.filter;
//     console.log(filter);
//     figure.forEach((picture) => {
//       if (filter == "all") {
//         picture.style.display = "block";
//       } else {
//         if (picture.classList.contains(filter)) {
//           picture.style.display = "block";
//         } else {
//           picture.style.display = "none";
//         }
//       }
//     });
//   });
// }

import { useEffect } from "react";

const FilterButtons = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".button-value");
    const figures = document.querySelectorAll(".figure-item");

    const handleButtonClick = (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;

      figures.forEach((picture) => {
        if (filter === "all") {
          picture.style.display = "block";
        } else {
          picture.style.display = picture.classList.contains(filter)
            ? "block"
            : "none";
        }
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return null; // This component doesn't render anything
};

export default FilterButtons;
