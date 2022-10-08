/* -------------------------------------------------------------------------- */
/*                               Making Gradient                              */
/* -------------------------------------------------------------------------- */
import { Gradient } from "./Gradient.js";
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
    inputC.classList.add("inputC-active");
    inputC.classList.remove("inputC-inactive");
    return;
  } else if (remindCB.checked) {
    console.log("jahah");
    buyCB.style.pointerEvents = "none";
    todoCB.style.pointerEvents = "none";
    remind = true;
    descC.style.display = "grid";
    inputC.classList.add("inputC-active");
    inputC.classList.remove("inputC-inactive");
    return;
  } else if (todoCB.checked) {
    console.log("adhaf");
    buyCB.style.pointerEvents = "none";
    remindCB.style.pointerEvents = "none";
    todo = true;
    descC.style.display = "grid";
    inputC.classList.add("inputC-active");
    inputC.classList.remove("inputC-inactive");
    return;
  }
  descC.style.display = "none";
  inputC.classList.remove("inputC-active");
  inputC.classList.add("inputC-inactive");
  buyCB.style.pointerEvents = "visible";
  remindCB.style.pointerEvents = "visible";
  todoCB.style.pointerEvents = "visible";
});
let boxVariant = "";
add.addEventListener("click", () => {
  if (buyCB.checked) {
    boxVariant = "buy";
    const addBuyBox = document.createElement("div");
    addBuyBox.className = "buy-box box";
    document.querySelector(".buy-container").appendChild(addBuyBox);
    addBuyBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${header.value}</h2>
          <h3 class='description'>${desc.value}</h3>
          <p>${link.value}</p>
          <h4 class="date">Tilføjet ${day}-${month} | Kl. ${h}:${m}</h4>`;
    trashItem();
    localAdd();
    return;
  } else if (remindCB.checked) {
    boxVariant = "remind";
    const addRemindBox = document.createElement("div");
    addRemindBox.className = "remind-box box";
    document.querySelector(".remind-container").appendChild(addRemindBox);
    addRemindBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${header.value}</h2>
          <h3 class='description'>${desc.value}</h3>
          <p>${link.value}</p>
          <h4 class="date">Tilføjet ${day}-${month} | Kl. ${h}:${m}</h4>`;
    trashItem();
    localAdd();
    return;
  } else if (todoCB.checked) {
    boxVariant = "ToDo";
    const addTodoBox = document.createElement("div");
    addTodoBox.className = "todo-box box";
    document.querySelector(".todo-container").appendChild(addTodoBox);
    addTodoBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${header.value}</h2>
          <h3 class='description'>${desc.value}</h3>
          <p>${link.value}</p>
          <h4 class="date">Tilføjet ${day}-${month} | Kl. ${h}:${m}</h4>`;
    trashItem();
    localAdd();
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
      console.log(boxes[b]);
      let historyArray = [];
      let historyJSON = localStorage.getItem("history");
      historyArray = JSON.parse(historyJSON);
      historyArray.pop(historyArray[b]);
      localStorage.setItem("history", JSON.stringify(historyArray));

      console.log(historyArray);
    });
  }
}

document.querySelector(".new").addEventListener("click", () => {
  inputC.style.display = "grid";
});

function localAdd() {
  const headerA = document.querySelectorAll(".header");
  const descA = document.querySelectorAll(".description");

  /* for (
    let num = 0, numT = 0;
    num < header.length, numT < desc.length;
    num++, numT++
  ) {} */
  // makes the historry array in the scope
  let historyArray = [];
  let historyJSON = localStorage.getItem("history");
  // if exists append player or add to points
  if (historyJSON) {
    historyArray = JSON.parse(historyJSON);
    let historikSpiller = historyArray.find(
      (x) => x["header"] == headerA[0].value
    );
    if (historikSpiller) {
    } else {
      historyArray.push({
        header: headerA[0].value,
        desc: descA[0].innerHTML,
        wat: `${day}-${month} | Kl. ${h}:${m}`,
        variant: boxVariant,
      });
    }
  } else {
    historyArray = [
      {
        variant: boxVariant,
        header: headerA[0].value,
        wat: `${day}-${month} | Kl. ${h}:${m}`,
        desc: descA[0].innerHTML,
      },
    ];
  }
  // always saves here

  localStorage.setItem("history", JSON.stringify(historyArray));
}

window.addEventListener("load", (event) => {
  // gets the JSON from the storage
  let historyJSON2 = localStorage.getItem("history");

  if (historyJSON2) {
    // if exsists makes into an array
    let historyArray2 = JSON.parse(historyJSON2);
    console.log(historyArray2);
    for (let i in historyArray2) {
      // write out the historic players
      /* console.log(historyArray2[i].header);
      console.log(historyArray2[i].desc);
      console.log(historyArray2[i].variant); */
      if (historyArray2[i].variant === "buy") {
        const addBuyBox = document.createElement("div");
        addBuyBox.className = "buy-box box";
        document.querySelector(".buy-container").appendChild(addBuyBox);
        addBuyBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${historyArray2[i].header}</h2>
        <h3>${historyArray2[i].desc}</h3>
        <p>${link.value}</p>
        <h4 class="date">Tilføjet ${historyArray2[i].wat} </h4>`;
      } else if (historyArray2[i].variant === "remind") {
        const addRemindBox = document.createElement("div");
        addRemindBox.className = "remind-box box";
        document.querySelector(".remind-container").appendChild(addRemindBox);
        addRemindBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${historyArray2[i].header}</h2>
                 <h3>${historyArray2[i].desc}</h3>
                 <p>${link.value}</p>
                 <h4 class="date">Tilføjet ${historyArray2[i].wat} </h4>`;
      } else if (historyArray2[i].variant === "ToDo") {
        const addTodoBox = document.createElement("div");
        addTodoBox.className = "todo-box box";
        document.querySelector(".todo-container").appendChild(addTodoBox);
        addTodoBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${historyArray2[i].header}</h2>
    <h3>${historyArray2[i].desc}</h3>
    <p>${link.value}</p>
    <h4 class="date">Tilføjet ${historyArray2[i].wat} </h4>`;
      }

      /* if ((historyArray2[i].variant = "remind")) {
               console.log("remind");
             } */
      //
      /* const addRemindBox = document.createElement("div");
      addRemindBox.className = "remind-box box";
      document.querySelector(".remind-container").appendChild(addRemindBox);
      addRemindBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${historyArray2[i].header}</h2>
          <h3>${historyArray2[i].desc}</h3>
          <p>${link.value}</p>
          <h4 class="date">Tilføjet ${historyArray2[i].wat} </h4>`; */
      //
      /* const addRemindBox = document.createElement("div");
      addRemindBox.className = "remind-box box";
      document.querySelector(".remind-container").appendChild(addRemindBox);
      addRemindBox.innerHTML = `<i class="fa-solid fa-trash"></i><h2>${historyArray2[i].header}</h2>
          <h3>${historyArray2[i].desc}</h3>
          <p>${link.value}</p>
          <h4 class="date">Tilføjet ${historyArray2[i].wat} </h4>`; */
      trashItem();
    }
  }
  /* ${day}-${month} | Kl. ${h}:${m} */

  /* if(boxes[b].classList.contains('remind-box')){ */

  /* } */
});
