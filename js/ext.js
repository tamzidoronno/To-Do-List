$(document).ready(function() {

	
	function action( varaibale ,element)
	{

		
		var txt = element.text() ;
		alert(txt) ;

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
		//alert(counter) ;

		$('#lists').append('<li class="list-group-item" id="li_'+counter+' ">'+ todo +' </li> ')
		.append('<span id ="link"><a  href="#" class="badge badge-primary" id= a_'+counter+ '>Edit</a><a href="#" id= a_'+counter+ ' class="badge badge-danger">Delete</a><a id= a_'+counter+ ' href="#" class="badge badge-success">Complete</a><a id= a_'+counter+ ' href="#" class="badge badge-warning">Incomplete</a></span>')
		.css('padding', '10px') ;

		$('#lists').next().css('color', 'red');
		$('#link').css('margin', '10px');

		//Run Time Events Initialization

		$('#lists').on('click', '#a_'+counter+'', function(event) {
			event.preventDefault();
			/* Act on the event */

			var varaibale = $(this).text() ;
			var this_sel  ;
			var id =$( this).attr('id').split("_")[1]  ;


			$( "li" ).each(function( index ) {
				
				var newID = $( this ).attr('id').split("_")[1] ;

				if ( newID== counter  )
				{
					this_sel = $(this) ;
				}

			});

			action(varaibale,this_sel) ;

		});
		
		
	}).focusout(function(event) {

		$('#text').val('') ;

	});



});
