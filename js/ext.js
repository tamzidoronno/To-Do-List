$(document).ready(function() {

	 top.completed =0   ;
	top.inCompleted =0 ;
	
	$('#addList').click(function(event) {

		var todo = $('#text').val() ;
		var counter = $('li').last().index() ;
		//alert(counter) ;

		$('#lists').append('<li class="list-group-item" id="li_'+counter+' ">'+ todo +' </li> ')
		.append('<span id ="link_'+counter+'"><a  href="#" class="badge badge-primary" id= a_'+counter+ '>Edit</a><a href="#" id= a_'+counter+ ' class="badge badge-danger">Delete</a><a id= a_'+counter+ ' href="#" class="badge badge-success">Complete</a><a id= a_'+counter+ ' href="#" class="badge badge-warning">Incomplete</a></span>')
		.css('padding', '10px') ;

		$('#lists').next().css('color', 'red');
		$('#link').css('margin', '10px');

		//Run Time Events Initialization

		$('#lists').on('click', '#a_'+counter+'', function(event) {
			event.preventDefault();
			/* Act on the event */

			var varaibale = $(this).text() ;
			var GrandParent  ;
			var parentID ;
			var child  = $(this);
			var id =$( this).attr('id').split("_")[1]  ;


			$( "li" ).each(function( index ) {
				
				var newID = $( this ).attr('id').split("_")[1] ;

				if ( newID== counter  )
				{
					GrandParent = $(this) ;
				}

			});

			$( "span" ).each(function( index ) {
				
				var newID = $( this ).attr('id').split("_")[1] ;

				if ( newID== counter  )
				{
					parentID = $(this) ;
				}

			});

			action(varaibale,GrandParent,parentID,child) ;

		});
		
		
	}).focusout(function(event) {

		$('#text').val('') ;

	});



});