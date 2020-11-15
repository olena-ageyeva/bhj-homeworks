const contentId = "book";

const content = document.getElementById(contentId);

const createButtonGroup = ({ buttonClassName }) => {
  const buttons = Array.from(document.querySelectorAll(`.${buttonClassName}`));

  for (const button of buttons) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const activeButton = document.querySelector(
        `.${buttonClassName}--active`
      );

      activeButton.classList.remove(`${buttonClassName}--active`);

      button.classList.add(`${buttonClassName}--active`);
      content.classList.replace(
        `${contentId}_${buttonClassName}-${activeButton.getAttribute(
          `data-${buttonClassName}`
        )}`,
        `${contentId}_${buttonClassName}-${button.getAttribute(
          `data-${buttonClassName}`
        )}`
      );
    });
  }
};

createButtonGroup({
  buttonClassName: "font-size",
});

createButtonGroup({
  buttonClassName: "color",
});

createButtonGroup({
  buttonClassName: "bg-color",
});
