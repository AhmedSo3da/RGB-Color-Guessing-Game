var numSquares = 6;
colors = generateRandomColors(numSquares)
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var squares = document.querySelectorAll('.square');
var reset = document.getElementById("reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var text = document.getElementById('RGB');

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    text.textContent = pickedColor;
    for(var i =0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    text.textContent = pickedColor;
    for(var i =0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

reset.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    text.textContent = pickedColor;
    messageDisplay.textContent = "";
    reset.textContent = "New Colors";
    for(var i =0; i<colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});
for (var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor == pickedColor){
            messageDisplay.textContent = "CORRECT!"
            changeColor(clickedColor);
            reset.textContent = "Play Again?";
        } 
        else{
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "WRONG!"
        }
    });
}

text.textContent = pickedColor;

function changeColor(color){
    for(var i =0; i<colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function pickColor(){
    var i = Math.floor(Math.random() * colors.length);
    return colors[i]; 

}
function generateRandomColors(num){
    var arr = []
    for(var i =0; i<num; i++){
        arr[i] = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    }
    return arr;
}