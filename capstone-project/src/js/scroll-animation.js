// import ScrollReveal from "scrollreveal";

// const scrollRevealConfig = () => {
//   // Initialize ScrollReveal
//   const sr = ScrollReveal();

//   window.sr = ScrollReveal();
//   sr.reveal(".logo", {
//     duration: 2000,
//     origin: "top",
//     distance: "10px",
//   });
//   sr.reveal(".caption", {
//     duration: 2500,
//     origin: "bottom",
//     distance: "30px",
//   });
//   sr.reveal(".showcase-card", {
//     duration: 1200,
//     origin: "bottom",
//     distance: "20px",
//   });
//   sr.reveal(".showcase-bottom", {
//     duration: 1000,
//     delay: 200,
//     origin: "left",
//     distance: "30px",
//   });
//   sr.reveal(".card-1", {
//     duration: 1900,
//     origin: "left",
//     distance: "10px",
//   });
//   sr.reveal(".card-2", {
//     duration: 1500,
//     delay: 400,
//     origin: "bottom",
//     distance: "80px",
//   });
//   sr.reveal(".card-3", {
//     duration: 1900,
//     origin: "right",
//     distance: "10px",
//   });
//   sr.reveal(".showcase-portfolio", {
//     duration: 2000,
//     origin: "left",
//     distance: "80px",
//   });
//   sr.reveal(".showcase-pictures", {
//     duration: 2400,
//     origin: "right",
//     distance: "10px",
//   });
// };

// scrollRevealConfig();

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealConfig = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // sr.reveal(".logo", {
    //   duration: 2000,
    //   origin: "top",
    //   distance: "10px",
    // });
    sr.reveal(".caption", {
      duration: 2500,
      origin: "bottom",
      distance: "30px",
    });
    sr.reveal(".showcase-card", {
      duration: 1200,
      origin: "bottom",
      distance: "20px",
    });
    sr.reveal(".showcase-bottom", {
      duration: 1000,
      delay: 200,
      origin: "left",
      distance: "30px",
    });
    sr.reveal(".card-1", {
      duration: 1900,
      origin: "left",
      distance: "10px",
    });
    sr.reveal(".card-2", {
      duration: 1500,
      delay: 400,
      origin: "bottom",
      distance: "80px",
    });
    sr.reveal(".card-3", {
      duration: 1900,
      origin: "right",
      distance: "10px",
    });
    sr.reveal(".showcase-portfolio", {
      duration: 2000,
      origin: "left",
      distance: "80px",
    });
    sr.reveal(".showcase-pictures", {
      duration: 2400,
      origin: "right",
      distance: "10px",
    });
  }, []); // Empty dependency array ensures the effect runs only once

  return null; // Since this component doesn't render anything
};

export default ScrollRevealConfig;
