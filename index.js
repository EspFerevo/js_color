const cols = document.querySelectorAll(".col");

//! Слушаем нажатие клавиши Space (пробел) для изменения цветов
document.addEventListener("keydown", (event) => {
  event.preventDefault(); // Предотвращаем стандартное поведение клавиши
  // console.log(event.code); Для проверки кода нажатой клавиши в консоли
  if (event.code.toLocaleLowerCase() === "space") {
    setRandomColors(); // Если нажата клавиша Space, меняем цвета
  }
});

//! Открытие и закрытие замочка при клике на иконку замка
document.addEventListener("click", (event) => {
  const type = event.target.dataset.type; // Получаем тип элемента, на который кликнули

  if (type === "lock") {
    const node =
      event.target.tagName.toLowerCase() === "i" // Проверяем, это ли сама иконка
        ? event.target
        : event.target.querySelector("i"); // Если не иконка, ищем её внутри

    node.classList.toggle("fa-lock-open"); // Меняем класс для открытия замка
    node.classList.toggle("fa-lock"); // Меняем класс для закрытия замка
  } else if (type === "copy") {
    copy(event.target.textContent); // Если кликнули на кнопку копирования, копируем текст
  }
});

//! Функция генерации случайного цвета
function generateRadnomColor() {
  const hexCodes = "0123456789ABCDEF"; // Массив возможных символов для цвета
  let color = "";

  for (let i = 0; i < 6; i++) { // Генерируем строку из 6 символов
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]; // Рандомный выбор символов
  }
  return "#" + color; // Возвращаем цвет в формате #XXXXXX
}

//! Функция установки цвета текста в зависимости от яркости фона
function setTextColor(text, color) {
  const luminance = chroma(color).luminance(); // Рассчитываем яркость цвета
  text.style.color = luminance > 0.5 ? "black" : "white"; // Если фон светлый — текст тёмный, и наоборот
}

//! Функция для копирования текста в буфер обмена
function copy(text) {
  navigator.clipboard.writeText(text); // Копируем текст в буфер обмена
  return; // Функция завершена
}

//! Функция для установки случайных цветов фонов
function setRandomColors() {
  const colors = [];

  cols.forEach((col) => {
    const isLocked = col.querySelector("i").classList.contains("fa-lock"); // Проверяем, заблокирован ли этот элемент
    const text = col.querySelector("h2"); // Находим элемент с текстом цвета
    const button = col.querySelector("button"); // Находим кнопку для копирования

    if (isLocked) {
      colors.push(text.textContent); // Если элемент заблокирован, сохраняем текущий цвет
      return; // Пропускаем его, не меняем цвет
    }

    const color = generateRadnomColor(); // Генерируем новый случайный цвет
    colors.push(color); // Добавляем цвет в массив

    text.textContent = color; // Обновляем текст с новым цветом
    col.style.background = color; // Меняем цвет фона колонки

    setTextColor(text, color); // Настроим цвет текста в зависимости от фона
    if (button) {
      setTextColor(button, color); // Настроим цвет текста на кнопке
    }
  });

  updateColorsHash(colors); // Обновляем хэш URL с текущими цветами
}

//! Функция для обновления хэш-ссылки с текущими цветами
function updateColorsHash(colors = []) {
  // document.location.hash = colors.toString(); // Старая версия (не использована)
  document.location.hash = colors
    .map((col) => {
      return col.substring(1); // Убираем знак # из каждого цвета
    })
    .join("-"); // Объединяем цвета в строку через дефис
}

setRandomColors(); // Инициализируем случайные цвета при загрузке
