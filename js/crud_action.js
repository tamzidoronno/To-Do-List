function action( varaibale ,GrandParent,parentID,child)
{
	var modal = document.getElementById('myModal');
	var update = document.getElementById('update');
	var cancel = document.getElementById('cancel');
	var edittext = $(edittext).text();
	
	if (varaibale=="Edit")
	{
			
			modal.style.display = "block";

    		update.onclick = function() {
		    GrandParent.text(edittext); //edited text gets updated here
		    modal.style.display = "none";
			}
    		cancel.onclick = function() {
		    modal.style.display = "none";
			}
	}
	else if (varaibale=="Delete")
	{

		GrandParent.hide('50') ;
		parentID.hide() ;

	}
	else if(varaibale =="Complete")
	{
		top.completed  +=1 ;
		console.log(completed) ;
		child.hide('slow') ;
		child.next().hide('slow') ;
	}
	else if (varaibale =="Incomplete")
	{
		top.inCompleted  +=1 ;
		console.log(inCompleted) ;
		child.hide('slow') ;
		child.prev().hide('slow') ;
	}
}