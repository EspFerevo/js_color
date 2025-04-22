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

// Проверяем колонкич
function setRandomColors() {
  cols.forEach((col) => {
    //!Изменяем текст на нзвание цвета
    const text = col.querySelectora("h2");
    const color = generateRadnomColor();
    text.textContent = color;

    //! Получаем рандомные цввета при обновлении страницы
    col.style.background = generateRadnomColor();
  });
}

setRandomColors();
