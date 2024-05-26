
const showBtn = document.getElementsByClassName('btnSM')[0];
const picUl = document.getElementById('picsUl');

let start = 300;
showBtn.addEventListener('click',function(event){
    for(let i = start; i < start+6; i++){
    const addLi = document.createElement('li');
    addLi.innerHTML=`<img src ='https://picsum.photos/id/${i}/378/378' >`
    picUl.appendChild(addLi);
    }
    start += 6;
});
