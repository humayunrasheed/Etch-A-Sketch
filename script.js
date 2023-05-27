function createGrid(m,n){
    const table = document.createElement('table');
    table.id="container";
    document.body.appendChild(table);
    for(i=0;i<m;i++){
        const container = document.getElementById('container');
        const row =document.createElement('tr');
        row.id='row'+i;
        container.appendChild(row);
        const ro=document.getElementById('row'+i);
        for (let j = 0;j<n;j++){
            const cell = document.createElement('td');
            cell.id='cell';
            ro.appendChild(cell);
        }
    }
    const items= document.querySelectorAll('#cell');
        items.forEach((item)=>{
        item.addEventListener('mouseover',()=>{
        item.style="background-color:Black";
            });
        });
}
// const container = document.querySelector('#container');
createGrid(16,16);
const Reset = document.querySelector('button');
Reset.addEventListener('click',createNew);
function createNew(){
      let num = prompt("Enter the number of square grid you want:");
      if(num<100&&num>1){
        removeGrid();
        createGrid(num,num);
        // const items= document.querySelectorAll('#cell');
        // items.forEach((item)=>{
        // item.addEventListener('mouseover',()=>{
        // item.style="background-color:Black";
        //     });
        // });
      }
}
function removeGrid(){
    const container =document.getElementById('container');
    container.remove();
}
// function that builds a grid in the "container"
// function createGrid(x) {
//     for (var rows = 0; rows < x; rows++) {
//         for (var columns = 0; columns < x; columns++) {
//             $("#container").append("<div class='grid'></div>");
//         };
//     };
//     $(".grid").width(960/x);
//     $(".grid").height(960/x);
// };

// // function that clears the grid
// function clearGrid(){
//     $(".grid").remove();
// };  	

// // function that prompts the user to select the number of boxes in a new grid
// // the function then also creates that new grid
// function refreshGrid(){
//     var z = prompt("How many boxes per side?");
//     clearGrid();
//     createGrid(z);
// };

// // create a 16x16 grid when the page loads
// // creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// // allows the click of a button to prompt the user to create a new grid
// $(document).ready(function() {
//     createGrid(16);

//     $(".grid").mouseover(function() {
//         $(this).css("background-color", "black");
//         });

//     $(".newGrid").click(function() {
//         refreshGrid();

//         $(".grid").mouseover(function() {
//         $(this).css("background-color", "black");
//         });
//     });
// });
