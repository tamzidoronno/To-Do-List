function action( varaibale ,GrandParent,parentID,child)
{
	if (varaibale=="Edit")
	{
		alert('edit1') ;
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