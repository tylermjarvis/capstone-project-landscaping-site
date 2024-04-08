const buttons = document.querySelectorAll(".button-value");
const figure = document.querySelectorAll(".figure-item");

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    console.log(filter);
    figure.forEach((picture) => {
      if (filter == "all") {
        picture.style.display = "block";
      } else {
        if (picture.classList.contains(filter)) {
          picture.style.display = "block";
        } else {
          picture.style.display = "none";
        }
      }
    });
  });
}
