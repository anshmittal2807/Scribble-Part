let board = document.querySelector("#board");
console.log(board)
let init_x  
let init_y 
let new_x
let new_y
let drawing = false;
let c = board.getContext("2d")
let color = "white"
let red =document.querySelector("#red")
let green = document.querySelector("#green")
let blue = document.querySelector("#blue")
let white  = document.querySelector("#white")
let black = document.querySelector("#black")
 //Resizing my board dimensions
board.width = window.innerWidth - 40 ;
board.height = window.innerHeight*0.8;

// used chat gpt for this
function resetColors() {
    red.style.backgroundColor = "";
    white.style.backgroundColor = "";
    blue.style.backgroundColor = "";
    black.style.backgroundColor = "";
    green.style.backgroundColor = "";
}


red.addEventListener("click" , () => {
    color = "red";
    resetColors()
    red.style.backgroundColor = "antiquewhite"



})
white.addEventListener("click" , () => {
    color = "white";
    resetColors()
    white.style.backgroundColor = "antiquewhite"

})
blue.addEventListener("click" , () => {
    color = "blue";
    resetColors()
blue.style.backgroundColor = "antiquewhite"

})
black.addEventListener("click" , () => {
    color = "black";
    resetColors()
    black.style.backgroundColor = "antiquewhite"

})
green.addEventListener("click" , () => {
    color = "green";
    resetColors()
    green.style.backgroundColor = "antiquewhite"

})







board.addEventListener("mousedown" , (e)=> {
drawing = true ;
init_x = e.clientX - board.offsetLeft;
init_y = e.clientY - board.offsetTop;
})

board.addEventListener("mouseup" , ()=> {
    drawing = false ;
    })

 board.addEventListener("mousemove" , (e) => {
 if (drawing) {
    new_x = e.clientX - board.offsetLeft;
    new_y =  e.clientY - board.offsetTop;
    c.beginPath();
    c.moveTo(init_x , init_y);   
    c.lineTo(new_x , new_y);
    c.strokeStyle = color
    c.lineWidth = 1;
    c.stroke(); 
    init_x = new_x;
    init_y = new_y;

} 
})

