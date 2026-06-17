let add=document.getElementById("add");
let submit=document.getElementById("submit");
let todolist=document.getElementById("todolist");
let completed=document.getElementById("completed");

let list=new Array();
submit.addEventListener('click',(event)=>{
    if(add.value!=''){
        list.push(add.value);
        todolist.innerHTML+='<li id="'+(list.length-1)+'"><button onclick="complete('+(list.length-1)+')">'+add.value+'</button></li>';
        add.value='';
    }
});
 function complete(id){
    completed.innerHTML+='<li>'+list[id]+'</li>';
    document.getElementById(id).style.display="none";
 }
