// ar = Array.from(document.getElementsByClassName('pro'));
// console.log(ar);
// ar.forEach((element,i)=>{
//     console.log(element,i+1);
//     console.log(element.src);
// })

const ar = Array.from(document.querySelectorAll('.pro-container__1 img'))
ar.forEach((element,i)=>{
    element.src =`./img/products/f${i+1}.jpg`
});
const ar1 = Array.from(document.querySelectorAll('.pro-container__2 img'))
ar1.forEach((element,i)=>{
    element.src =`./img/products/n${i+1}.jpg`
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=>{
        navbar.classList.add('active');
    });
}
if (close){
    close.addEventListener('click',()=>{
        navbar.classList.remove('active');
    });
}


const mainImg = document.getElementById('mainImg');
const smallImg =Array.from(document.getElementsByClassName('small-img'))

smallImg.forEach(function(element,i){
    element.onclick = function(){
        mainImg.src = element.src
    }
})


let myRe = /\d.*/g
// let getnumber = "213.321asdza"
// console.log(getnumber);
// let number =  getnumber.match(myRe)
// // number = number.join("")
// console.log(number);
// console.log(number[0]);
// let c =parseInt(number[0]) + parseInt(number[1]) 
// console.log(c);


let arr = Array.from(document.getElementsByClassName('text'))
console.log(arr);
let b = [];
let c = [];
let d=0.00;
let k = 0;
let j = 0;
arr.forEach(function(element,i){
    b[j] = element.innerHTML; 
    console.log(b[j]);
    j++;
})
b.forEach(function(element,i){
    c[k] = element.match(myRe);
    c[k] = c[k].join(' ');
    d = d + parseFloat(c[k]);
    k++;
});
console.log(c[1]);
console.log(d);


// d= parseFloat(c[0]) + parseFloat(c[1]);
// console.log(d);