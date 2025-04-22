const cols = document.querySelectorAll(".col");

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

//! Проверяем колонкич
function setRandomColors() {
  cols.forEach((col) => {
    //?  Изменяем "текст" в h2 на название цвета
    const text = col.querySelector("h2");
    const color = generateRadnomColor();

    text.textContent = color;

    //? Получаем рандомные цввета при обновлении страницы
    col.style.background = generateRadnomColor();
  });
}

setRandomColors();
