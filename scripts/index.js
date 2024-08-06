let burgerBtn = document.querySelector('.nav_info2--burger');
let dropDownList = document.querySelector('.nav_info2--dropdown');

burgerBtn.addEventListener('click', ()=>{
    dropDownList.style.display = dropDownList.style.display === 'none'?'flex':'none';
    
});