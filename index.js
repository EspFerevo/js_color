const cols = document.querySelectorAll(".col");

//! Изменение цветов с помощью Space (пробела)
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  // console.log(event.code); Проверка клика кнопки в консоли
  if (event.code.toLocaleLowerCase() === "space") {
    setRandomColors();
  }
});

//! Открывание и закрывание замочка при клике на него
document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;

  if (type === "lock") {
    const node =
      event.target.tagName.toLowerCase() === "i"
        ? event.target
        : event.target.querySelector("i");

    node.classList.toggle("fa-lock-open");
    node.classList.toggle("fa-lock");
  } else if (type === "copy") {
    copy(event.target.textContent);
  }
});

//! Генерация случайного цвета
function generateRadnomColor() {
  const hexCodes = "0123456789ABCDEF";
  let color = "";

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
}

//!
function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "black" : "white";
}

//! Копирка текста
function copy(text) {
  navigator.clipboard.writeText(text);

  return;
}

//!
function setRandomColors() {
  const colors = [];

  cols.forEach((col) => {
    const isLocked = col.querySelector("i").classList.contains("fa-lock");
    const text = col.querySelector("h2");
    const button = col.querySelector("button");
    const color = generateRadnomColor();

    if (isLocked) {
      colors.push(text.textContent);
      return;
    }

    text.textContent = color;
    col.style.background = color;

    setTextColor(text, color); // Чтобы текст не терялся на фоне
    setTextColor(button, color); // Чтобы кнопка не терялась на фоне
  });
}

function updateColorsHash(colors = []) {
  document.location.hash = color.toString();
}
setRandomColors();
