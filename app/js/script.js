//Mobile navbar toggle:

const toggle = document.querySelector(".toggle-mobile");

const mobileNavBar = document.querySelector(".links-container");

toggle.addEventListener("click", function(){
  const visible = mobileNavBar.getAttribute("data-visible");

  if(visible === "false"){
    mobileNavBar.setAttribute("data-visible", true);
  } else {
    mobileNavBar.setAttribute("data-visible", false);
  }
})

// 3D click Here div

const threeD = document.querySelector(".container-3d");

// Personal custom property:
const areaMove = document.querySelector(".main__content");

areaMove.addEventListener("mousemove", (e) => {
  rotateElement(e, threeD);
});

function rotateElement(event, element){
  // Get mouse position:
  const x = event.clientX;
  const y = event.clientY;

  // Find the middle:
  const middleX = window.innerWidth / 2; 
  const middleY = window.innerHeight / 2; 

  // Get offset from middle:
  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;

  // console.log(offsetX, offsetY);

  element.style.setProperty("--rotate-degX", -1 * offsetY + "deg")
  element.style.setProperty("--rotate-degY", offsetX + "deg")
};