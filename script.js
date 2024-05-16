const arr = Array(9).fill(0);
console.log(arr);
let step = 1;

arr.forEach((item, index) => {
  const div = document.createElement("div");
  div.setAttribute("data-n", index);
  ttt.append(div);
});

function click(event) {
  const n = +event.target.getAttribute("data-n");
  console.log(n);
  if (arr[n] !== 0) return;
  arr[n] = step;
  console.log(arr);
  draw();
  step = step === 1 ? 2 : 1;
}
const tttDiv = document.querySelectorAll("#ttt>div");
function draw() {
  arr.forEach((item, index) => {
    switch (item) {
      case 1:
        tttDiv[index].textContent = "X";
        break;
      case 2:
        tttDiv[index].textContent = "0";
        break;
    }
  });
}

ttt.addEventListener("click", click);
