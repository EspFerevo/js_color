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

// Проверяем колонки
function setRandomColors() {
  cols.forEach((col) => {
    col.style.background = generateRadnomColor();
  });
}

setRandomColors();
