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