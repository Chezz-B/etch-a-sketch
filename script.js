"use strict";

const container = document.getElementById("container");
const containerWrap = document.getElementById("containerWrap");
let newContainer;
let numberOfSquares = 16;

function newGrid(){
  for(let i = 0; i < numberOfSquares * numberOfSquares; i++){
  const item = document.createElement("div");
  item.classList.add("item");
  item.addEventListener("mouseover", function(){
    item.style.backgroundColor = "black";
  });
  container.style.gridTemplateColumns = `repeat(${numberOfSquares}, ${numberOfSquares}fr)`;
  container.appendChild(item);
};
};



const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function(){
  const items = document.querySelectorAll(".item");
  for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = "white";
  }
});


const sliderInfo = document.getElementById("sliderInfo");


const slider = document.querySelector("#slider");
slider.addEventListener("change", function(){
  const items = document.querySelectorAll(".item");
  for(let i = 0; i < items.length; i++){
    items[i].remove();
  }
  numberOfSquares = slider.value;
  sliderInfo.textContent = `${numberOfSquares} x ${numberOfSquares}`;
  newGrid();
});


newGrid();


