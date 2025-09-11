
const loader = document.querySelector('[data-loader]');

window.addEventListener("load", function(){
    setTimeout(() => loader.classList.add('hide'), 2000);
});
