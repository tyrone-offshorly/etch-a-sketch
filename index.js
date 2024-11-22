const GRID_MAXIMUM = 100;
const TABLE_HEIGHT = 500;
const TABLE_WIDTH = 500;
const createGrid = (num) => {
  for(let i = 0; i < num; i++) {
    const row = document.createElement('div')
    for(let j = 0; j < num; j++) {
      const col = document.createElement('div');
    }
  }
}
const calculateSquareWidth = (num) => {
  const width = TABLE_WIDTH / num;
  return width;
}
const calculateSquareHeight = (num) => {
  const height = TABLE_HEIGHT / num;
  return height;
}
const populateGrid = (num, container) => {
  const squareHeight = calculateSquareHeight(num);
  const squareWidth = calculateSquareWidth(num);
  console.log(squareHeight);
  console.log(squareWidth);
  for(let i = 0; i < num; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    for(let j = 0; j < num; j++) {
      const square = document.createElement('div');
      square.classList.add("square");
      square.style.width = squareWidth + "px";
      square.style.height = squareHeight + "px";
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = 'black';
      })
      column.appendChild(square);
    }
    container.appendChild(column);
  }
  
}

const container = document.querySelector("#container");
populateGrid(16, container);
