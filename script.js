"use strict";

// 1․ ստեղծում եք 2 հատ դիվ, տարբեր գույների, ու tocuhEvent - ով էնպես եք անում, 
// որ նախ դիվերը հնարավոր լինի տեղաշարժել, ու բացի տեղաշարժելուց, երբ որ դիվերը կպնեն իրար 
// թեկուզ 1պիքսելով պետք ա գույները փոխվեն, այսինքն առաջին դիվի գույնը գնա երկրորդ դիվին, 
// երկրորդ դիվի գույնը առաջին դիվին

// const wrapper = document.querySelector(".wrapper");
// const box1 = document.createElement("div");
// const box2 = document.createElement("div");

// const col1 = "#4A40F4";
// const col2 = "#F44094";

// box1.textContent = "BOX 1";
// box2.textContent = "BOX 2";

// box1.style.cssText = `
//   width: 150px;
//   height: 150px;
//   background: ${col1};
//   margin: 5px;
// `;

// box2.style.cssText = `
//   width: 150px;
//   height: 150px;
//   background: ${col2};
//   margin: 5px;
// `;

// wrapper.prepend(box1, box2);

// wrapper.addEventListener("touchmove", function(e) {

//   box1.addEventListener("touchmove", function (e) {
//     const x = e.touches[0].pageX;
//     const y = e.touches[0].pageY;

//     box1.style.cssText += `
//     transform: translateX(${x}px) translateY(${y}px);
//   `;
//   });

//   box2.addEventListener("touchmove", function (e) {
//     const x = e.touches[0].pageX;
//     const y = e.touches[0].pageY;

//     box2.style.cssText += `
//     transform: translateX(${x}px) translateY(${y}px);
//   `;
//   });

//   if (box1.pageX === box2.pageX && box1.pageY === box2.pageY){
//     box1.style.cssText += `background: ${col2};`;
//     box2.style.cssText += `background: ${col1};`;
//   } 
// });

// 2․ ստեղծում եք առանձին դիվ, որը պետք ա կլոր լինի, ու բրաուզերի իվենթների միջոցով(drag) 
// որոնք չենք անցել, պետք է անեք այնպես որ կլորը կարողանաք տեղափոխել ու ձեր դրած տեղը դնել 

const div = document.createElement("div");
document.body.prepend(div);

div.style.cssText = `
  border-radius: 70%;
  width: 150px;
  height: 150px;
  background: blue;
`;

div.draggable = true;
div.style.position = "absolute";

div.addEventListener("dragend", function(e){
  const red = parseInt(Math.random() * 256).toString(16);
  const green = parseInt(Math.random() * 256).toString(16);
  const blue = parseInt(Math.random() * 256).toString(16);
  const color = "#" + red + green + blue; 

  div.style.background = `${color}`;
  
  function move(pageX, pageY) {
    div.style.left = pageX - div.offsetWidth / 2 + "px";
    div.style.top = pageY - div.offsetHeight / 2 + "px";
  }
  move(e.pageX, e.pageY);
});

