(function(){
	
	var currentQuote = $('#quote')
	var quote = new QuoteService();

	quote.getQuote(function(quote){
		console.log(quote.quote)
		currentQuote.append(`<h2 class="quote"> ${quote.quote}</h2>`)
		$("#quote").attr('title', `${quote.author}`);

	})




	//Get your QuoteService
	
}())
