var activelink = document.getElementsByClassName('nav-link'); 
let i = 0;
activelink.onclick = function(){
    activelink.classList.add = ' active'
    activelink[i].classList.remove = 'active'
}
AOS.init();
 var load = document.getElementById('load')
 window.addEventListener('load', function(){
    load.style.display = 'none';
 })