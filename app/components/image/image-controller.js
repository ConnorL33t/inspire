(function(){
	var imageService = new ImageService();


	imageService.getImage(function(image){
	$('#body').css('background-image', `url(${image.large_url}`);
	$('#body').css(`background-size`, 'cover' )

	})
	


}())
