var $newTask = $("#new-task");
var $incompletedTasks = $("#incomplete-tasks");
var $completedTasks = $("#completed-tasks");
var $addButton = $("#add-button");

var makeNewListItem = function(taskToAdd) {

  var $newListItem = $("<li></li>");
  var $newCheckbox = $("<input type='checkbox' class='checkbox'>");
  var $newLabel = $("<label></label>");
  var $newEditButton = $("<button class='btn btn-primary' id= 'edit-button'>Edit</button>");
  var $newDeleteButton = $("<button class='btn btn-danger' id='delete-button'>Delete</button>");

  $newListItem.append($newCheckbox)
  .append($newLabel.html(taskToAdd))
  .append($newEditButton)
  .append($newDeleteButton);

  return $newListItem;
}

//add new
$addButton.on( "click", function(){
  var listItemToAdd = makeNewListItem($newTask.val());
  $incompletedTasks.append(listItemToAdd);
  $newTask.val("");
})

//delete
$incompletedTasks.on( "click", "#delete-button", function(){
  $(this).parent().remove();  
})

$completedTasks.on( "click", "#delete-button", function(){
  $(this).parent().remove();  
})



//edit
$incompletedTasks.on( "click", "#edit-button", function(){
  var $list = $(this).parent();  
  var $input = $(this).prev();
  var $label = $(this).prev();

    var modal = document.getElementById('myModal');
    var update = document.getElementById('update');
    var cancel = document.getElementById('cancel');
    modal.style.display = "block";

    update.onclick = function() {

      var edittext = $('#edittext').val();
      alert(edittext) ;
      $label.text(edittext);

      modal.style.display = "none";
      $edittext.val("");

    }
    cancel.onclick = function() {
      modal.style.display = "none";
    }
})

$completedTasks.on( "click", "#edit-button", function(){

  var $list = $(this).parent();  
  var $input = $(this).prev();
  var $label = $(this).prev();

    var modal = document.getElementById('myModal');
    var update = document.getElementById('update');
    var cancel = document.getElementById('cancel');
    modal.style.display = "block";

    update.onclick = function() {

      var edittext = $('#edittext').val();
      alert(edittext) ;
      $label.text(edittext); 

      modal.style.display = "none";
      $edittext.val("");

    }
    cancel.onclick = function() {
      modal.style.display = "none";
    }
})

//checkbox
$incompletedTasks.on( "click", "input.checkbox", function(){
 var listItem = $(this).parent();
 $completedTasks.append(listItem);
})

$completedTasks.on( "click", "input.checkbox", function(){
 var listItem = $(this).parent();
 $incompletedTasks.append(listItem);
})