
const loader = document.querySelector('[data-loader]');

window.addEventListener("load", function(){
    setTimeout(() => loader.classList.add('hide'), 2000);
});


const navLinks =document.querySelectorAll('.nav-link');

navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        navLinks.forEach(item=> item.classList.remove('active'));

        link.classList.add('active');
    });
});

