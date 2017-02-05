"use strict";

let map;

// initialize method for google map
let initMap = () => {
  let {lat, lng} = getDefaultCoords();

  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: lng},
    zoom: 4
  });

  let infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( (position) => {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here!');

      map.setZoom(9);
      map.setCenter(pos);
    });
  }
}
