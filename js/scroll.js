const scrollTopButton = document.getElementsByClassName('btnScroll')[0];

scrollTopButton.addEventListener("click", evnet =>{
    window.scrollTo({top:0, behavior : 'smooth'});
});