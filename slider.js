let bg  = document.querySelector('div.bg');
let go = document.getElementById('go');
let back = document.getElementById('back');
let index = 0;
let array = ['1.webp','2.webp','3.jpeg','4.webp'];
function changeImageGo(){
    index++
    if(index==array.length){
        index = 0 ; 
    }
    bg.style.backgroundImage = `url(image/${array[index]})`
    console.log(index)
}
go.addEventListener('click',changeImageGo);
function changeImageBack(){
    if(index==0){
        index =array.length; 
    }
    index--
    console.log(index)
    bg.style.backgroundImage = `url(image/${array[index]})`
}
back.addEventListener('click',changeImageBack);

setInterval(function(){
    index++
    if(index==array.length){
        index = 0 ; 
    }
    bg.style.backgroundImage = `url(image/${array[index]})`
},4000)