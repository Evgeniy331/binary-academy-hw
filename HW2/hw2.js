var $todoList = $("#todo-list"), $newItem = $("#newItem"), 
    $prevText, $destroyBtn, $edited;

var $ESC_CODE = 27, $ENTER_CODE = 13;

function addListItem(){

  if ($("#newItem").val() === "")
    return;

  $todoList.append("<li><input type=checkbox class=toggle /><span class=text>" + $("#newItem").val() 
      + "</span><button class=destroy></button></li>");
  $newItem.val("");
}

function deleteSelected(){
  $todoList.find(".toggle:checked").closest("li").remove();
  $("#toggle-all").prop("checked", false);
}

function deleteItem() {
  $(this).closest("li").remove();
}

function selectItem() {
  $(this).closest("li").toggleClass("selectedItem");
}

$(document).ready(function(){

  $(document).on("click", ".destroy", deleteItem);
  $(document).on("click", ".toggle", selectItem);
  $("#deleteSelected").click(deleteSelected);

  $("#newItem").keyup(function(e){
      if (e.keyCode === 13) { addListItem(); }
  });

  $("#toggle-all").click(function () {

    if (!$(this).is(":checked")) 
        return;

    $todoList.find(":checkbox").prop("checked", true);
    $todoList.find("li").addClass("selectedItem", this.checked);

  });

  $("#todo-list").on("dblclick", "span", function (){
    $el = $("<input type=text class=in-edit-text />");
    $prevText = $(this);
    $destroyBtn = $(this).parent().find(".destroy");
    $destroyBtn.hide();
    $(this).replaceWith($el);
    $el.val( this.innerHTML ).focus();
    $edited = false;
  });

  $("#todo-list").on("keyup", ".in-edit-text", function(e){

    if (e.keyCode === $ENTER_CODE) {
      $edited = true;
      $(this).replaceWith($("<span class=text>" + $(this).val() + "</span>"));
      $destroyBtn.replaceWith("<button class=destroy></button>");
    }

    if (e.keyCode == $ESC_CODE) {
      $(this).replaceWith($prevText);
      $destroyBtn.replaceWith("<button class=destroy></button>");
    }

  });

  $("#todo-list").on("focusout", ".in-edit-text", function (){
    if (!$edited) {
      $(this).replaceWith($prevText);
      $destroyBtn.replaceWith("<button class=destroy></button>");
    }
  });
});
