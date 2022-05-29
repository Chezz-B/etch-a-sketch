"use strict";

const container = document.getElementById("container");


  for(let i = 0; i < 256; i++){
  const item = document.createElement("div");
  item.classList.add("item");
  item.addEventListener("mouseover", function(){
    item.style.backgroundColor = "black";
  });
  
  container.appendChild(item);
};

// const items = document.getElementsByClassName("item");

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function(){
  const items = document.querySelectorAll(".item");
  for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = "white";
  }
})

