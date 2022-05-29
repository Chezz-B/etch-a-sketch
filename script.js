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


