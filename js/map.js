var map;

var styles = [

          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
        ];



function getChosenFilm() //look in local storage for the chosen film
	{
		var chosenFilm;
		if(sessionStorage.getItem("chosenFilm")){
			chosenFilm=JSON.parse(sessionStorage.getItem("chosenFilm"));
		}
		return chosenFilm;
		
	}



function showMap(latLng){
    
	var styledMap = new google.maps.StyledMapType(styles,
    {name: "NIGHT"});

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: latLng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  });
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

}

function addMarker(latLng, label){
	var marker = new google.maps.Marker({
	    position: latLng,
	    map: map,
	    label: label
	    
	  });
   
}

function initMap(){
  
  navigator.geolocation.getCurrentPosition(function(position){
  
  // var bounds = new google.maps.LatLngBounds();

  var currentFilm = getChosenFilm();
  var cinemaLat = parseFloat(currentFilm.lat);
  var cinemaLng = parseFloat(currentFilm.lng);
  mylat = position.coords.latitude;
  mylng = position.coords.longitude;

  var cinemaLocation = new google.maps.LatLng({lat:cinemaLat, lng: cinemaLng})
  var userLocation = new google.maps.LatLng({lat:mylat, lng: mylng})
        
  showMap(cinemaLocation);
  showMap(userLocation);
  addMarker(cinemaLocation, "A");
  addMarker(userLocation, "YOU");



        }

    );

}


