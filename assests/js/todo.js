// Check Off Specific Todos By Clicking
    //this code says that when an li is clicked inside ul then code will run
$("ul").on("click","li",function(){
     $(this).toggleClass("completed");
});


// Click on X to delete Todo
    //this code says that when an span is clicked inside ul then code will run
$("ul").on("click","span",function(event){
	//"this" gives us span that we clicked on, "parent" gives us the li , "fadeOut" will fadeout the entire li.
	$(this).parent().fadeOut(500,function(){
		// here "this" is for li and "remove" the entire li
		$(this).remove();  
	});
   event.stopPropagation();
});


// Add new Todo

$("input[type='text'").on("keypress",function(event){
	if(event.which===13){
		//grabbing new todo text from input
		var todoText=$(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span> <i class='far fa-trash-alt'></i> </span> " + todoText+ "</li>")

	}
});

$(".fa-plus").on("click",function(){
	$("input[type='text'").fadeToggle(500);
});