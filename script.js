let incbtn=document.getElementById('inc')
let decbtn=document.getElementById('dec')
let counter=document.getElementById('counter')

let count=0;

incbtn.addEventListener('click',()=>{
    count+=1;
    counter.innerText=count;
})

decbtn.addEventListener('click',()=>{
    count-=1;
    counter.innerText=count
})