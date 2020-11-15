const inputFloors = document.getElementById('floor');
const btnSend = document.getElementById('btnSend');
const pyramid = document.getElementById('pyramid'); 

let numbFloor;
let hashtag = '#';
let spacing = ' ';

let floors = [];

function fillFloor(level) 
{
    let newFloor = [];

    for(let i = 0; i < numbFloor; i++) {
        if( i >= numbFloor - level )
        {
            newFloor.push(hashtag);
        }
        if( i < numbFloor - level )
        {
            newFloor.push(spacing);
        }
    }

    newFloor.push(spacing);

    let revertedFloor = newFloor.slice();
    let rightSide = revertedFloor.reverse();
    rightSide.shift();
    
    rightSide.forEach(element => {
        newFloor.push(element);
    });

    floors.push(newFloor);
}

function DrawingPyramid(numbFloor) 
{

    for (let floor = 1; floor <= numbFloor; floor++) {
        fillFloor(floor);
    }

    PrintingPyramid();
}

function PrintingPyramid()
{  
    for (let index = 0; index < floors.length; index++) {
        for (let i = 0; i < floors[index].length; i++) {
            pyramid.innerHTML += floors[index][i];
        }
        pyramid.innerHTML += '<br>';
    }
}

function DeleteContain() {
    floors = [];
    pyramid.innerHTML = '';
}

function App() {
    DeleteContain();
    numbFloor = inputFloors.value;
    DrawingPyramid(numbFloor);
    console.log(floors);
}

btnSend.addEventListener('click', App);


//en consola:
/*
   # #
  ## ##
 ### ###
#### ####
 */


