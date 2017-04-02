"use strict";

let map;

// initialize method for google map - called by default from callback url when map is init
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

/**
 * Search for farmers markets and set map to zip code input from user
 *
 */
let searchByZip = () => {
  let zipInput = document.getElementById('zip-search');
  let zip = zipInput.value;
  let zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;

  // validate zip entered
  let valid = zip.toString().match(zipRegex);

  if(!valid){
    // alert user to enter a valid zip code
    $.notify("Please enter a valid zip code.", "warn");
  } else {
    $.notify("Searching this zip code for nearby farmers markets...", "success");
  }

  // hit reverse geocode api to get lat and lng from google
  // set map
}
