const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if (close) {
    bar.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

// sproduct js
// var MainImg=document.getElementById('MainImg');
// var smalling =document.getElementsByClassName("small-img-col");
// smalling[0].onclick=function() {
//     MainImg.src=smalling[0].src
// }
// smalling[1].onclick=function() {
//     MainImg.src=smalling[1].src
// }
// smalling[2].onclick=function() {
//     MainImg.src=smalling[2].src
// }
// smalling[3].onclick=function() {
//     MainImg.src=smalling[3].src
// }
