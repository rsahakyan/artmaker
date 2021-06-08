// Select color input
var gridColor = document.getElementById('colorPicker');
// Select size input
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');
const submitButton = document.getElementById('submitButton');
const grid = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function(x){
    console.log("the user was submit the grid dimention");
    grid.innerHTML = " ";
    x.preventDefault();
    makeGrid();
});

grid.addEventListener('click', function(x){
    if(x.target.nodeName === 'TD'){
        x.target.style.backgroundColor = gridColor.value;
    }
});

function makeGrid(x) {

// Your code goes here!
    for(var i=0; i < gridHeight.value; i++){
        const row = grid.insertRow (0);
        for(var j=0; j < gridWidth.value; j++){
            row.insertCell (0);
        }
        
    }
}
