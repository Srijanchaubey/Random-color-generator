let h1 = document.querySelector("h1");
let box = document.querySelector(".col-box");
let btn = document.querySelector("button");
function colcod() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `RGB(${red},${green},${blue})`;
}
btn.addEventListener("click", function () {
  h1.innerText = colcod();
  box.style.backgroundColor = colcod();
});
