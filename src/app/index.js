
const loader = document.querySelector('[data-loader]');

window.addEventListener("load", function(){
    setTimeout(() => loader.classList.add('hide'), 1000);
});


const navLinks =document.querySelectorAll('.nav-link');

navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        navLinks.forEach(item=> item.classList.remove('active'));

        link.classList.add('active');
    });
});

const cardScroll=document.querySelector('[data-cards-scroll]');

function scrollToLeft(){
    cardScroll.scrollBy({left:-200, behavior:'smooth'});
}

function scrollToRight(){
    cardScroll.scrollBy({left:200, behavior:'smooth'});
}



const scrollGrab = document.getElementById('scroll-grab');


let isDown = false;
let startX;
let scrollLeft;

scrollGrab.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - scrollGrab.offsetLeft;
  scrollLeft = scrollGrab.scrollLeft;
  scrollGrab.style.cursor = "grabbing";
});

scrollGrab.addEventListener("mouseleave", () => {
  isDown = false;
  scrollGrab.style.cursor = "grab";
});

scrollGrab.addEventListener("mouseup", () => {
  isDown = false;
  scrollGrab.style.cursor = "grab";
});

scrollGrab.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollGrab.offsetLeft;
  const walk = (x - startX) * 2; // speed
  scrollGrab.scrollLeft = scrollLeft - walk;
});