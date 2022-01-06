/*
Create a for loop that creates a determinated number of divs
Inside all thwse divs, will be columns.
*/
const container = document.querySelector('#container');


//Default grid
createDivs(16);

function createDivs(row){
    for (let i=0; i<row; i++){
        let rows = document.createElement('div');
        rows.className = 'rows'
        for(let x=0; x<row; x++){
            let cols = document.createElement('div');
            cols.className='grid-item';

            //function in charge of coloring squares
            
            function colorChange(){
                cols.style.backgroundColor = 'green';
            }
            
        cols.addEventListener('mouseover',colorChange, false)
            rows.appendChild(cols);
        }
        container.appendChild(rows);
    }
}

//Deletes all divs created before in order to create a new one
function resetGrid(){
    let newone = prompt('how many? XD');
    let del = document.getElementsByClassName('rows');
    while(del.length > 0){
        del[0].parentNode.removeChild(del[0]);
    }

    if(newone > 100){
        createDivs(1);
    }
    else{
        createDivs(newone);
    }
    
}

//DOMing the reset button and adding the reset function
let newButton = document.querySelector('.reset');
newButton.addEventListener('click', resetGrid);


