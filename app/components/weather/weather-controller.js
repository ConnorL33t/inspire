(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather.weather[0].description);
		var temp = toFahrenheit(weather.main.temp);
		var max = toFahrenheit(weather.main.temp_max);
		var min = toFahrenheit(weather.main.temp_min);
		$('#weather').append(`<h2>${weather.name}</h2><h3>Current Temp: ${temp}&deg<span id='temperature'>F</span></h3><p>H: ${max}&deg  L: ${min}&deg</p> <br> <h4>  
		Current condition :${weather.weather[0].description}</h4>`)

		$('#weather').on('click' , function(){
		
			var temperature = $('#temperature').text()
			if(temperature == 'F'){
				var newTemp = Math.round(weather.main.temp - 273.15);
				$('#weather').find('h3').replaceWith(`<h3>Current Temp: °${newTemp}<span id='temperature'>C</span></h3>`)
				return temp;
			}else if(temperature == 'C'){
				var newTemp = temp
				$('#weather').find('h3').replaceWith(`<h3>Current Temp: °${newTemp}<span id='temperature'>F</span></h3>`) 
			}
		})
	})


	function toFahrenheit(temp){
		var celsius = temp - 273.15
		console.log(celsius)
		var fahrenheit = celsius * 9 / 5 + 32;
		return Math.round(fahrenheit)
	}

}())

