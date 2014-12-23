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
                //setForcast(data.forecast.simpleforecast.forecastday)	             	           	           	                
            }
        });


        function setCurrentWeather(current){

        	//parse out current weather properties
        	//Eventually turn this into a mustache template

        	/*
        	var feelsLike = current.feelslike_string,
        	location = current.display_location.full,
        	weather = current.weather,
        	time = current.observation_time,
        	temperature = current.temperature_string,
        	precipitation = current.precip_today_string,
        	wind = current.wind_string;
        	*/

        	var template = $('#current-weather-template').html();
		    var info = Mustache.to_html(template, current);
		    $('#current-weather').html(info);

        	console.log(location);
        	console.log(wind);
        	console.log(time);
        	//$("#current-weather").html(weather);
        }

        function setForcast(forecast){

        	//parse forcast and set values in the html for each day
        	//Eventually turn this into a mustache template
        	console.log("forecast");
        	console.log(forecast);
        	//$("#forecast").html(weather);	
        }


    });

});