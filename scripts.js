/* -------------------------------------------------------------------------- */
/*                               Making Gradient                              */
/* -------------------------------------------------------------------------- */
import { Gradient } from "/Gradient.js";
// Create your instance
const gradient = new Gradient();
// Call `initGradient` with the selector to your canvas
gradient.initGradient("#gradient-canvas");

/* -------------------------------------------------------------------------- */
/*                              Program starting                              */
/* -------------------------------------------------------------------------- */
const date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const buyCB = document.querySelector("#buy");
const remindCB = document.querySelector("#remind");
const todoCB = document.querySelector("#todo");
const descC = document.querySelector(".desc-container");
const inputC = document.querySelector(".input-container");
const add = document.querySelector(".addBeam");

let header = document.querySelector(".header");
let desc = document.querySelector(".desc");
let link = document.querySelector(".link");

const exit = document.querySelector(".fa-circle-xmark");

document.querySelector(".checkboxes").addEventListener("click", () => {
  let buy = false;
  let remind = false;
  let todo = false;

  if (buyCB.checked) {
    console.log("gsd");
    buy = true;
    remindCB.style.pointerEvents = "none";
    todoCB.style.pointerEvents = "none";
    descC.style.display = "grid";
    return;
  } else if (remindCB.checked) {
    console.log("jahah");
    buyCB.style.pointerEvents = "none";
    todoCB.style.pointerEvents = "none";
    remind = true;
    descC.style.display = "grid";
    return;
  } else if (todoCB.checked) {
    console.log("adhaf");
    buyCB.style.pointerEvents = "none";
    remindCB.style.pointerEvents = "none";
    todo = true;
    descC.style.display = "grid";
    return;
  }
  descC.style.display = "none";
  buyCB.style.pointerEvents = "visible";
  remindCB.style.pointerEvents = "visible";
  todoCB.style.pointerEvents = "visible";
});

add.addEventListener("click", () => {
  if (buyCB.checked) {
    const addBuyBox = document.createElement("div");
    addBuyBox.className = "buy-box box";
    document.querySelector(".buy-container").appendChild(addBuyBox);
    addBuyBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${header.value}</h2>
          <h3>${desc.value}</h3>
          <p>${link.value}</p>
          <h4 class="date">Tilføjet ${day}-${month} | Kl. ${h}:${m}</h4>`;
    trashItem();
    return;
  } else if (remindCB.checked) {
    const addRemindBox = document.createElement("div");
    addRemindBox.className = "remind-box box";
    document.querySelector(".remind-container").appendChild(addRemindBox);
    addRemindBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${header.value}</h2>
          <h3>${desc.value}</h3>
          <p>${link.value}</p>
          <h4 class="date">Tilføjet ${day}-${month} | Kl. ${h}:${m}</h4>`;
    trashItem();
    return;
  } else if (todoCB.checked) {
    const addTodoBox = document.createElement("div");
    addTodoBox.className = "todo-box box";
    document.querySelector(".todo-container").appendChild(addTodoBox);
    addTodoBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${header.value}</h2>
          <h3>${desc.value}</h3>
          <p>${link.value}</p>
          <h4 class="date">Tilføjet ${day}-${month} | Kl. ${h}:${m}</h4>`;
    trashItem();
    return;
  }
});

exit.addEventListener("click", () => {
  inputC.style.display = "none";
});

function trashItem() {
  let trash = document.querySelectorAll(".fa-trash");
  let boxes = document.querySelectorAll(".box");
  for (let i = 0, b = 0; i < trash.length, b < boxes.length; i++, b++) {
    trash[i].addEventListener("click", () => {
      boxes[b].remove();
    });
  }
}

/* let CB = document.querySelectorAll('.checkboxes input')
CB.forEach((box, index) => {
     
}); */
/* 
 next.addEventListener("click", () => {
     x++;
   
     if (x > 2) {
       x = 0;
     }
   
     fields.forEach((box, index) => {
       if (index === x) {
         box.style.display = "block";
       } else {
         box.style.display = "none";
       }
     });

   }); */

   document.querySelector('.new').addEventListener('click', () => { 
     inputC.style.display = "grid";
    } )