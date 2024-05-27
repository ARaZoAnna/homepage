const modalOpenButton = document.getElementsByClassName('btn-modalOpen')[0];
const modalCloseButton = document.getElementsByClassName('btn-modalClose')[0];
const modal = document.getElementById('modalBG');
//classList.remove는 클래스를 삭제하는 기능이다. 즉 id를 사용할 수 없다.
modalOpenButton.addEventListener('click',function() {
    modal.classList.remove('hidden');
});

modalCloseButton.addEventListener('click',function(){
    modal.classList.add('hidden');
});