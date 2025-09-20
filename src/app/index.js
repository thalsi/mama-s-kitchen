
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

