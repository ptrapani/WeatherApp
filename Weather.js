$(document).ready(function () {

    //$("#weather button").on("click", function () {

    $("#search-button").on("click", function () {

        //city/state value is hard coded for now
        $.ajax({
            type: 'GET',
            url: 'http://api.wunderground.com/api/6110d723ddc2a0c0/forecast/geolookup/conditions/q/Ga/atlanta.json',
            data: {
                get_param: 'value'
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);

                setCurrentWeather(data.current_observation);

                //To-do - Implement 5 day forcast	
                //setForcast(data.forecast.txt_forecast.forecastday)	             	           	           	                
            }
        });


        function setCurrentWeather(current){

        	//parse out current weather properties 
        	var template = $('#current-weather-template').html();
		    var info = Mustache.to_html(template, current);
		    $('#current-weather-content').html(info);
        }

        function setForcast(forecast){

        	console.log(forecast);

        	//parse forcast and set values in the html for each day
        	var template = $('#forecast-template').html();
        	forecast = "{days:" + forecast + "}";
		    var info = Mustache.to_html(template, forecast);
		    $('#forecast-content').html(info);
        }


    });

});