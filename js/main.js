
console.log("Connected !!!");
window.onload = main;


function dragStart() {
  let task = document.getElementsByClassName('task');
  for (var i = 0; i < task.length; i++) {
    document.getElementsByClassName('task')[i].addEventListener('dragstart', show);
  }
}


function show(ev) {

  ev.dataTransfer.setData("text", ev.target.id);
}

function dropping() {
  document.getElementsByClassName('box')[0].addEventListener('dragenter', enter);
  document.getElementsByClassName('box')[0].addEventListener('dragover', over);
  document.getElementsByClassName('box')[0].addEventListener('drop', drop);
  document.getElementsByClassName('box')[1].addEventListener('dragenter', enter);
  document.getElementsByClassName('box')[1].addEventListener('dragover', over);
  document.getElementsByClassName('box')[1].addEventListener('drop', drop);
}

function enter(e) {
  e.preventDefault();

}

function over(e) {
  e.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data + " is moved ");
  ev.target.appendChild(document.getElementById(data));
}

// fonction main 
function main() {

  dragStart();
  dropping();

}
