
console.log("Connected !!!");
window.onload=main;


function dragStart(){
    let task=document.getElementsByClassName('task');
    for(var i=0;i< task.length;i++){
      document.getElementsByClassName('task')[i].addEventListener('dragstart',show);
    }
}


function show(ev){ 
  console.log(this);
  ev.dataTransfer.setData("text", ev.target.id);
}

function dropping(){
  document.getElementsByClassName('box')[0].addEventListener('dragenter',enter);
  document.getElementsByClassName('box')[0].addEventListener('dragover',over);
  document.getElementsByClassName('box')[0].addEventListener('drop',drop);
  document.getElementsByClassName('box')[1].addEventListener('dragenter',enter);
  document.getElementsByClassName('box')[1].addEventListener('dragover',over);
  document.getElementsByClassName('box')[1].addEventListener('drop',drop);
}



function enter(e) {
  e.preventDefault();
  console.log("hi");
}

function over(e){
  e.preventDefault();
  console.log("over");
}

function drop(ev){
  console.log(this);
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data);
  ev.target.appendChild(document.getElementById(data));
}

function DragandDrop(){
  dragStart();
}

function main(){
  DragandDrop();
  dropping();

}
