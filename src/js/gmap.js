"use strict";

let map;

// initialize method for google map
let initMap = () => {
  // get lat and lng
  let {lat: lat, lng:lng} = getDefaultCoords();

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: lng},
    zoom: 8
  });
}
