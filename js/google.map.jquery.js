$(function(){
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(19.000011,72.829726), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [			{		featureType:"road",		elementType:"labels",		stylers:[{visibility:"simplified"},{lightness:20}]	},{		featureType:"administrative.land_parcel",		elementType:"all",		stylers:[{visibility:"off"}]	},{		featureType:"landscape.man_made",		elementType:"all",		stylers:[{visibility:"off"}]	},{		featureType:"transit",		elementType:"all",		stylers:[{visibility:"off"}]	},{		featureType:"road.local",		elementType:"labels",		stylers:[{visibility:"simplified"}]	},{		featureType:"road.local",		elementType:"geometry",		stylers:[{visibility:"simplified"}]	},{		featureType:"road.highway",		elementType:"labels",		stylers:[{visibility:"simplified"}]	},{		featureType:"poi",		elementType:"labels",		stylers:[{visibility:"off"}]},{		featureType:"road.arterial",		elementType:"labels",		stylers:[{visibility:"off"}]	},{		featureType:"water",		elementType:"all",		stylers:[{hue:"#a1cdfc"},{saturation:30},{lightness:49}]	},{		featureType:"road.highway",		elementType:"geometry",		stylers:[{hue:"#f49935"}]	},{		featureType:"road.arterial",		elementType:"geometry",		stylers:[{hue:"#fad959"}]	}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using out element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
            
			var mapOptions1 = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(25.069458, 55.142491),

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#acbcc9'}]},{'featureType':'landscape','stylers':[{'color':'#f2e5d4'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#c5c6c6'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#e4d7c6'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#fbfaf7'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#c5dac6'}]},{'featureType':'administrative','stylers':[{'visibility':'on'},{'lightness':33}]},{'featureType':'road'},{'featureType':'poi.park','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':20}]},{},{'featureType':'road','stylers':[{'lightness':20}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement1 = document.getElementById('map1');

                // Create the Google Map using out element and options defined above
                var map1 = new google.maps.Map(mapElement1, mapOptions1);
            }
});
