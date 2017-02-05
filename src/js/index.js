"use strict";

// main functions

/**
 * Get the lat and lng coordinates for a user's device or default to Nashville, TN, USA coordinates
 *
 * @returns {object} Coords - set of latitude and longitude coordinates
 */
let getDefaultCoords = () => {

  // object to return, defaults to Nashville, TN, USA coordinates
  let coords = {
    lat : 36.1627,
    lng : -86.7816
  }

  // check geolocation availability
  if(!navigator.geolocation){
    // short circuit if not available
    return coords;
  }

  return coords;

}
