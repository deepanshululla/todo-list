// Check off specific todos on clicking
$(".ul-list").on('click',".content-list",function(){
    // basically it gets toggled when we click content-list inside ul-list class
    $(this).toggleClass('completed');
});

// click on X to delete todo
$(".ul-list").on("click",".del-btn",function(event){
    // basically it gets toggled when we click del-btn inside ul-list class
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// creating a new todo

$("input[type='text']").keypress(function(event) {
    /* Act on the event */
    if(event.which === 13 && $(this).val().length !==0){
        var new_todo=$(this).val();
        // create a new li and add to ul 
        $(".ul-list").append("<li><span class='del-btn'> <i class='fa fa-trash' aria-hidden='true'></i> </span> <span class='content-list' >"+new_todo+" </span></li>");
        $(this).val("");
    }
});

// plus sign hides/unhides the input
$(".todo-container").on("click",".fa-plus",function(event){
    $(".todo-container input").fadeToggle();
});