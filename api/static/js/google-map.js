// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 14,

    scrollwheel: false,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(51.517228, -0.078778), // New York

    // How you would like to style the map.
    // This is where you would paste any style found on

    styles: [],
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("google-map");

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(51.517228, -0.078778),
    map: map,
    title: "Mboathoscope",
    icon: "assets/images/map-marker.png",
    animation: google.maps.Animation.BOUNCE,
  });
}
