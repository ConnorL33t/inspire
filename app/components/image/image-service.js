function ImageService (){
	this.getImage =  function(callWhenDone){
	   var img = localStorage.getItem('image')
	   if(img){
		   img = JSON.parse(img)
		   console.log(img)
		   callWhenDone(img)
	   }
		 $.get('http://www.splashbase.co/api/v1/images/random', function(res){
		              localStorage.setItem('image',JSON.stringify(res))
					  callWhenDone(res);
		})
	}
}
