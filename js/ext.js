$(document).ready(function() {
	

	$('#addList').click(function(event) {

		var todo = $('#text').val() ;
		var counter = $('li').last().index() ;
		alert(counter) ;

		$('#lists').append('<li class="list-group-item" id=" li'+counter+' ">'+ todo +' </li> ')
		.append('<span id ="link"><a  href="#" class="badge badge-primary" id= a'+counter+ '>Edit </a><a href="#" id= a'+counter+ ' class="badge badge-danger">Delete </a><a id= a'+counter+ ' href="#" class="badge badge-success">Complete </a><a id= a'+counter+ ' href="#" class="badge badge-warning">Incomplete</a></span>')
		.css('padding', '10px') ;

		$('#link').css('margin', '10px');

		
	}).focusout(function(event) {
			
			$('#text').val('') ;

		});


	function action( varaibale ,element)
	{
		if (varaibale=="Edit")
		{

		}
		else if (varaibale=="Delete")
		{

		}
		else if(varaibale =="Complete")
		{

		}
		else if (varaibale =="Incomplete")
		{

		}
	}
	$('#a-1').click(function(event) {
		/* Act on the event */
		alert("clicked") ;
	});
	$('#link').mousemove(function(event) {
		/* Act on the event */
		alert("clecked") ;
	});

});
