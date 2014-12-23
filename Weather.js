$(document).ready(function () {

    //$("#weather button").on("click", function () {

    $("#search-button").on("click", function () {

        //value is hard coded for now

/*
        $.ajax({
            type: 'GET',
            url: 'http://api.wunderground.com/api/6110d723ddc2a0c0/forecast/geolookup/conditions/q/Ga/atlanta.json',
            data: {
                get_param: 'value'
            },
            dataType: 'json',
            success: function (data) {
                alert("success!");
                var weather = data;
                console.log(data);

                //this is where the JSON parsing will happen
                //testing on static JSON file to avoid unneeded requests	

            }
        });
*/

        $.getJSON("atlanta.json", function (data) {
            //parse current weather and set values in the html

            console.log(data);
            
            $("#current-weather").html(data);

            //parse forcast and set values in the html for each day
            $("#forecast").html(data);

        });

    });

});