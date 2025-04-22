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

    //! Получаем рандомные цввета при обновлении страницы 
    col.style.background = generateRadnomColor(); 
  });
}

setRandomColors();
