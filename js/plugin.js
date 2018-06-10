( function ($) {
 
    $.fn.countDown = function(options,callback)
    {
    	var setting  = { 'from':60 } ;
    	this_sel = this ;
    	if(options) {
    		$.extend( setting, options);
    	}

    	current = setting['from'] ;

    	function countdown_exec()
    	{
    		if (current==0) {

    			clearInterval(interval) ;
    			callback.call(this) ;
    		}
    		this_sel.text(current) ;
    		current -=1 ;

    	}
    	interval = setInterval(countdown_exec,1000) ;
    	
    }

    $.fn.hoverText = function()
    {
    	$(this).after('<div id="hoverdiv"></div>') ;
    	this_sel  =this ;

    	var title = $(this).attr('title');	

    	this_sel.mousemove(function(e) {
    		/* Stuff to do when the mouse enters the element */

    		$('#hoverdiv').show().css('top',e.clientY+10)
    		.css('left', e.clientX).text(title); 

    	}).mouseout(function(event) {
    		/* Act on the event */
    		$('#hoverdiv').hide() ;
    	});
    }
  
})	( jQuery );