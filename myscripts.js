
let tasks = [
  {
    id: 0,
    title: "Doing Laundary",
    dueDate: new Date (2020,1,28),
    completed : false,
    completeDate : null,
    createdDate: new Date (2020,1,23),
    deleted:false,
    note:"I need to get quarters first at Kroger."
  },
  {
    id: 1,
    title: "CS3744 Assignment 3",
    dueDate: new Date (2020,2,17),
    completed : false,
    completeDate : null,
    createdDate: new Date (2020,1,24),
    deleted:false,
    note:"I better start early cuz it looks pretty complicated.\r\nLooks like I have to read w3schools.com a lot."
  },
  {
    id: 2,
    title: "Getting AAA batteries",
    dueDate: null,
    completed : true,
    completeDate : new Date (2020,2,1),
    createdDate: new Date (2020,1,26),
    deleted:false,
    note:"for my remote control."
  },
  {
    id: 3,
    title: "Booking a flight ticket ACM CHI conference",
    dueDate: new Date (2020,3,15),
    completed : false,
    completeDate : null,
    createdDate: new Date (2020,2,26),
    deleted:false,
    note:"I would have to book a flight ticket to ACM CHI conference.\r\nKeep an eye on the cancellation policy. the conference may be cancelled due to the cornoa virus outbreak. :( Although flight tickets are getting cheaper."
  }
];

let noteMaker = function(id, title, note){
  var tbodyRef = document.getElementById('tasks').getElementsByTagName('tbody')[0];
  var newRow2 = tbodyRef.insertRow();
  if(title.length > 30){
    title = title.substring(0, 30) + '...';
  }
  newRow2.id = 'lower'+id;
  $('#lower'+id).append('<tr id="note-'+id+'" class="collapse"> <td></td> <td colspan="5"> <div class="well"> <h3>'+title+'</h3> <div>'+note+'</div> </div> </td> </tr>');
}

let itemMaker = function(id, title, due, complete, completedDate, createDate, removed, note){
  var tbodyRef = document.getElementById('tasks').getElementsByTagName('tbody')[0];
  var newRow = tbodyRef.insertRow();
  newRow.id = id;
  var crossed1 = '';
  var crossed2 = '';
  if(!complete && (new Date()) > due && due != null){
    newRow.classList.add("danger");
  } else if(complete){
    newRow.classList.add("success");
    crossed1 = '<del>';
    crossed2 = '</del>';
  } else {

  }
  if(removed){
    return;
  }
  if(!due){
    due = '';
  } else {
    due = due = (due.getMonth()+1) + '/' + due.getDate() + '/' + due.getFullYear();
  }
  if(!completedDate){
    completedDate = '';
  }else {
    completedDate = completedDate.getDate() + '/' + completedDate.getMonth() + '/' + completedDate.getFullYear();
  }
  if(!createDate){
    createDate = '';
  }else {
    createDate = createDate.getDate() + '/' + createDate.getMonth() + '/' + createDate.getFullYear();
  }
  $('#'+id).append('tr id="'+id+'" class="danger"> <td class="text-center"><input type="checkbox" class="form-check-input" value="'+id+'"></td> <td class="text-center">'+crossed1+title+crossed2+'</td> <td class="text-center"><span class="text-right"><button class="btn btn-xs btn-warning" data-toggle="collapse" data-target="#note-'+id+'"><span class="glyphicon glyphicon-triangle-bottom"> </span> Note</button></span></td> <td class="text-center">'+due+'</td> <td class="text-center">'+completedDate+'</td> <td class="text-center">        <button type="button" class="btn btn-danger btn-xs deletetask" alt="Delete the task" value="'+id+'"><span class="glyphicon glyphicon-trash"></span></button>        <a target="_blank" href="mailto:?body='+note+'&amp;subject='+title+'"><button type="button" class="btn btn-danger btn-xs emailtask" alt="Send an email" value="'+id+'"><span class="glyphicon glyphicon-envelope"></span></button></a>      </td> </tr>');
  $('#tasks > tbody:last-child').append('<tr id="note-'+id+'" class="collapse"> <td></td> <td colspan="5"> <div class="well"> <h3>'+title+'</h3> <div>'+note+'</div> </div> </td> </tr>');
  for(var i = 0; i < document.getElementsByClassName("form-check-input").length; i++){
      document.getElementsByClassName("form-check-input")[i].removeEventListener('change', addListener);
  }
  for(var i = 0; i < document.getElementsByClassName("form-check-input").length; i++){      
      document.getElementsByClassName("form-check-input")[i].addEventListener('change', addListener);
  }

  for(var i = 0; i < document.getElementsByClassName("btn btn-danger btn-xs deletetask").length; i++){
    document.getElementsByClassName("form-check-input")[i].removeEventListener('click', removeListener);
  }

  for(var i = 0; i < document.getElementsByClassName("btn btn-danger btn-xs deletetask").length; i++){
    document.getElementsByClassName("btn btn-danger btn-xs deletetask")[i].addEventListener('click', removeListener);
  }
  for(var i = 0; i < document.getElementsByClassName("form-check-input").length; i++){
    if(document.getElementsByClassName("form-check-input")[i].value == id){
      document.getElementsByClassName("form-check-input")[i].checked = tasks[id].completed;
    }
  }
}

let removeListener = function(value){
  let prompt = confirm("Are you sure you want to delete this task?");
  if(!prompt){
    return;
  }
  tasks[this.value].deleted = true;
  redoTable(mode);
}

let count = 4;
let mode = 0;
let completeCount = 1;
let redoTable = function(value){
  for(var i = 0; i < tasks.length; i++){    
    if(document.getElementById(i)){ 
      document.getElementById(i).remove();
    }
    if(document.getElementById("lower"+i)){
      document.getElementById("lower"+i).remove();
    }
    if(document.getElementById("note-"+i)){
      document.getElementById("note-"+i).remove();
    }
  }
  if(mode == 0){
    for(var i = 0; i < tasks.length; i++){
      itemMaker(tasks[i].id, tasks[i].title, tasks[i].dueDate, tasks[i].completed, tasks[i].completeDate, tasks[i].createdDate, tasks[i].deleted, tasks[i].note);
    } 
  } else if(mode == 1){
    for(var i = 0; i < tasks.length; i++){
      if(!tasks[i].completed){
        itemMaker(tasks[i].id, tasks[i].title, tasks[i].dueDate, tasks[i].completed, tasks[i].completeDate, tasks[i].createdDate, tasks[i].deleted, tasks[i].note);
      }
    }
  } else if(mode == 2) {
    for(var i = 0; i < tasks.length; i++){
      if(tasks[i].dueDate < new Date() && tasks[i].dueDate){
        itemMaker(tasks[i].id, tasks[i].title, tasks[i].dueDate, tasks[i].completed, tasks[i].completeDate, tasks[i].createdDate, tasks[i].deleted, tasks[i].note);
      }
    }
  } else {
    for(var i = 0; i < tasks.length; i++){
      if(tasks[i].dueDate < new Date() && tasks[i].dueDate && !tasks[i].completed){
        itemMaker(tasks[i].id, tasks[i].title, tasks[i].dueDate, tasks[i].completed, tasks[i].completeDate, tasks[i].createdDate, tasks[i].deleted, tasks[i].note);
      }
    }
  }
}

let addListener = function(value){
    if (this.checked) {
      tasks[this.value].completed = this.checked;
      tasks[this.value].completeDate = new Date();
    } else {
      tasks[this.value].completed = this.checked;
      tasks[this.value].completeDate = null;
    }
    var disable = true;
    completeCount = 0;
    for(let i = 0; i < tasks.length; i++){
      if(!tasks[i].deleted && tasks[i].completed){
        completeCount++;
        disable = false;
      }
    }
    document.getElementById("deleteCompletedTasks").disabled = disable;
    redoTable(mode);
}

document.addEventListener("DOMContentLoaded", function () {
  redoTable(mode);
for(var i = 0; i < document.getElementsByClassName("form-check-input").length; i++){      
  document.getElementsByClassName("form-check-input")[i].addEventListener('change', addListener);   
}

document.getElementsByClassName("btn btn-success addtask")[0].addEventListener('click', function(){
  $("#myModal").modal('show');
});

document.getElementById("deleteCompletedTasks").addEventListener('click', function(){
  let prompt = "Are you sure you want to delete " + completeCount;
  if(completeCount > 1){
    prompt += " tasks?";
  } else {
    prompt += " task?";
  }
  let sign = confirm(prompt);
  if(sign){
    for(var i = 0; i < tasks.length; i++){
      tasks[i].deleted = tasks[i].completed;
    }
    redoTable(mode);
  } else {

  }
});

document.getElementById("hidecompleted").addEventListener('click', function(){
  if(document.getElementById("hidecompleted").classList.contains("active")){
    if(document.getElementById("overdue").classList.contains("active")){
      mode = 2;
    } else {
      mode = 0;
    }
    document.getElementById("hidecompleted").classList.remove("active")
  } else {
    if(document.getElementById("overdue").classList.contains("active")){
      mode = 3;
    } else {
      mode = 1;
    }
    document.getElementById("hidecompleted").classList.add("active")
  }
  redoTable(mode);
});

document.getElementById("overdue").addEventListener('click', function(){
  if(document.getElementById("overdue").classList.contains("active")){
    if(document.getElementById("hidecompleted").classList.contains("active")){
      mode = 1;
    } else {
      mode = 0;
    }
    document.getElementById("overdue").classList.remove("active")
  } else {
    if(document.getElementById("hidecompleted").classList.contains("active")){
      mode = 3;
    } else {
      mode = 2;
    }
    document.getElementById("overdue").classList.add("active")
  }
  redoTable(mode);
});

document.getElementsByClassName("btn btn-success btn-default pull-left")[0].addEventListener('click', function(){
  event.preventDefault()
  let temp_title = document.getElementById("task-title").value;//task-note
  let temp_date = new Date(document.getElementById("due-date").value);
  if(temp_title == ""){
    alert("You need a title");
    return;
  }
  if(isNaN(temp_date)){
    alert("Check your date format");
    return;
  }
  tasks[tasks.length] = {
    id: count,
    title: temp_title,
    dueDate: temp_date,
    completed : false,
    completeDate : null,
    createdDate: new Date (),
    deleted:false,
    note:document.getElementById("task-note").value
  };
  count++;
  $("#myModal").modal('hide');
  $("#myModal").find('form').trigger('reset');
  redoTable();
  return false;
});

document.getElementById("deleteCompletedTasks").disabled = false;
})
