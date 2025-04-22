const cols = document.querySelectorAll(".col");


//! Изменение цветов с помощью Space (пробела)
document.addEventListener("keydown", (event) => {
  // console.log(event.code); Проверка клика кнопки в консоли
  if (event.code.toLocaleLowerCase() === "space") {
    setRandomColors();
  }
});

//Генерация случайного цвета
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

function setRandomColors() {
  cols.forEach((col) => {
    const text = col.querySelector("h2");
    const button = col.querySelector("button");
    const color = generateRadnomColor();

    text.textContent = color;
    col.style.background = color;

    setTextColor(text, color); // Чтобы текст не терялся на фоне
    setTextColor(button, color); // Чтобы кнопка не терялась на фоне
  });
}

setRandomColors();
