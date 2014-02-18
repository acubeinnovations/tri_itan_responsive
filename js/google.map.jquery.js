$(function(){
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 15,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(19.000011,72.829726), // Mumbai

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [			{		featureType:"road",		elementType:"labels",		stylers:[{visibility:"simplified"},{lightness:20}]	},{		featureType:"administrative.land_parcel",		elementType:"all",		stylers:[{visibility:"off"}]	},{		featureType:"landscape.man_made",		elementType:"all",		stylers:[{visibility:"off"}]	},{		featureType:"transit",		elementType:"all",		stylers:[{visibility:"off"}]	},{		featureType:"road.local",		elementType:"labels",		stylers:[{visibility:"simplified"}]	},{		featureType:"road.local",		elementType:"geometry",		stylers:[{visibility:"simplified"}]	},{		featureType:"road.highway",		elementType:"labels",		stylers:[{visibility:"simplified"}]	},{		featureType:"poi",		elementType:"labels",		stylers:[{visibility:"off"}]},{		featureType:"road.arterial",		elementType:"labels",		stylers:[{visibility:"off"}]	},{		featureType:"water",		elementType:"all",		stylers:[{hue:"#a1cdfc"},{saturation:30},{lightness:49}]	},{		featureType:"road.highway",		elementType:"geometry",		stylers:[{hue:"#f49935"}]	},{		featureType:"road.arterial",		elementType:"geometry",		stylers:[{hue:"#fad959"}]	}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using out element and options defined above
				

                var map = new google.maps.Map(mapElement, mapOptions);
            	var icon = { 
				url: 'images/favicon.ico'
			};

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(19.000011,72.829726),
				map: map,
				icon: icon
			});
			var contentString = '<strong>ITAN JEWELS PVT LTD</strong><br>126 G FL, 0B/0C BENEFICE BUSINESS HOUSE <br>MATHURA DAS MILL COMPOUND, N M MARG<br>LOWER PAREL WEST, MUMBAI 400 013<br>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
		 
			google.maps.event.addListener(marker, 'mouseover', function() {
			  infowindow.open(map,marker);
			});
			google.maps.event.addListener(marker, 'mouseout', function() {
				  infowindow.close();
			});
			
			var mapOptions1 = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 15,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(25.069458, 55.142491),    // Dubai

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#acbcc9'}]},{'featureType':'landscape','stylers':[{'color':'#f2e5d4'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#c5c6c6'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#e4d7c6'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#fbfaf7'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#c5dac6'}]},{'featureType':'administrative','stylers':[{'visibility':'on'},{'lightness':33}]},{'featureType':'road'},{'featureType':'poi.park','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':20}]},{},{'featureType':'road','stylers':[{'lightness':20}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement1 = document.getElementById('map1');

                // Create the Google Map using out element and options defined above
                var map1 = new google.maps.Map(mapElement1, mapOptions1);
				var icon = { 
					url: 'images/favicon.ico'
				};

				var marker1 = new google.maps.Marker({
					position: new google.maps.LatLng(25.069458, 55.142491),
					map: map1,
					icon: icon
				});
				var contentString1 = '<strong>ITAN JEWELS DMCC</strong><br>PO BOX 938898 <br>28F, AU GOLD TOWER<br>CLUSTER I, JLT, DUBAI<br>';
				var infowindow1 = new google.maps.InfoWindow({
					content: contentString1
				});
			 
				google.maps.event.addListener(marker1, 'mouseover', function() {
				  infowindow1.open(map1,marker1);
				});
				google.maps.event.addListener(marker1, 'mouseout', function() {
				  infowindow1.close();
				});
				
				
            }
});
