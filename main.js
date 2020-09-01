const counter = document.querySelector('.counter p');

const add = () => counter.textContent++;
document.querySelector('.clickMe').addEventListener('click', add);
const subtract = () => counter.textContent >= 1 ? counter.textContent-- : false;
document.querySelector('.minus').addEventListener('click', subtract);
const reset = () => counter.textContent = 0;
document.querySelector('.reset').addEventListener('click', reset);