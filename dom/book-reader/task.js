const contentId = "book";
const controlId = `${contentId}_fs`;
const content = document.getElementById(contentId);

const createButtonGroup = ({ buttonClassName }) => {
  const buttons = Array.from(document.querySelectorAll(`.${buttonClassName}`));

  for (const button of buttons) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const activeButton = document.querySelector(`.${buttonClassName}_active`);

      activeButton.classList.remove(`${buttonClassName}_active`);

      button.classList.add(`${buttonClassName}_active`);
      content.classList.replace(
        `${controlId}-${activeButton.getAttribute("data-size")}`,
        `${controlId}-${button.getAttribute("data-size")}`
      );
    });
  }
};

createButtonGroup({
  buttonClassName: "font-size",
});

createButtonGroup({
  buttonClassName: ".controls .color",
});

createButtonGroup({
  buttonClassName: ".controls .background",
});
