$(document).ready(function () {

    //$("#weather button").on("click", function () {

    $("form").on("submit", function () {

    	var location = $("#location").val();
    	alert(location);

/*
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

                //Set all JSON data in their respective mustache template	
                setCurrentWeather(data.current_observation);
                setForcast(data.forecast.txt_forecast)	             	           	           	                
            }
        });


        function setCurrentWeather(current){

        	//parse out current weather properties 
        	var template = $('#current-weather-template').html();
		    var info = Mustache.to_html(template, current);
		    $("#current-weather-container").show();
		    $('#current-weather-content').html(info);
        }

        function setForcast(forecast){

        	//parse forcast and set values in the html for each day
        	var template = $('#forecast-template').html();
		    var info = Mustache.to_html(template, forecast);
		    $("#forecast-container").show();
		    $('#forecast-content').html(info);
        }
*/
    });
});