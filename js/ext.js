$(document).ready(function() {

	
	function action( varaibale ,element)
	{

		alert(varaibale) ;
		var txt = $(element).text() ;


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


	$('#addList').click(function(event) {

		var todo = $('#text').val() ;
		var counter = $('li').last().index() ;
		alert(counter) ;

		$('#lists').append('<li class="list-group-item" id="li'+counter+' ">'+ todo +' </li> ')
		.append('<span id ="link"><a  href="#" class="badge badge-primary" id= a'+counter+ '>Edit </a><a href="#" id= a'+counter+ ' class="badge badge-danger">Delete </a><a id= a'+counter+ ' href="#" class="badge badge-success">Complete </a><a id= a'+counter+ ' href="#" class="badge badge-warning">Incomplete</a></span>')
		.css('padding', '10px') ;

		$('#lists').next().css('color', 'red');
		$('#link').css('margin', '10px');

		//Run Time Events Initialization

		$('#lists').on('click', '#a'+counter+'', function(event) {
			event.preventDefault();
			/* Act on the event */
			
			var element = $('#li'+counter+'') ;
			var varaibale  = $(this).text() ;

			action(varaibale,element) ;

		});

		
	}).focusout(function(event) {

		$('#text').val('') ;

	});

});
