//Array of Markers
var markers = [
  {
    coords:{ lat: 36.035833, lng: -78.921183 },
    content: '<h3>Duke Homestead</h3>'
  },
  {
    coords:{ lat: 36.029213, lng: -78.975073 },
    content: '<h3>Bennett Place</h3>'
  },
  {
    coords:{ lat: 35.821592, lng: -80.897344 },
    content: '<h3>Fort Dobbs</h3>'
  },
  {
    coords:{ lat: 36.009738, lng: -79.520861 },
    content: '<h3>Alamance Battleground</h3>'
  },
  {
    coords:{ lat: 34.236508, lng: -77.954311 },
    content: '<h3>Battleship North Carolina</h3>'
  },
  {
    coords:{ lat: 35.302176, lng: -78.322470 },
    content: '<h3>Bentonville Battlefield</h3>'
  },
  {
    coords:{ lat: 33.971752, lng: -77.917666 },
    content: '<h3>Fort Fisher</h3>'
  },
  {
    coords:{ lat: 36.119901, lng: -78.836680 },
    content: '<h3>Historic Stagville</h3>'
  },
  {
    coords:{ lat: 35.285486, lng: -80.466463 },
    content: '<h3>Reed Gold Mine</h3>'
  },
  {
    coords:{ lat: 35.789385, lng: -76.403968 },
    content: '<h3>Somerset Place</h3>'
  },
  {
    coords:{ lat: 35.105765, lng: -77.044371 },
    content: '<h3>Tryon Palace</h3>'
  },
  {
    coords:{ lat: 35.182620, lng: -79.929204 },
    content: '<h3>Town Creek Indian Mound</h3>'
  },
  {
    coords:{ lat: 34.040498, lng: -77.945959 },
    content: '<h3>Brunswick Town / Fort Anderson</h3>'
  },
  {
    coords:{ lat: 36.067864, lng: -79.624333 },
    content: '<h3>Charlotte Hawkins Brown Museum</h3>'
  },
  {
    coords:{ lat: 35.261306, lng: -77.583213 },
    content: '<h3>CSS Neuse & Gov. Caswell Memorial</h3>'
  },
  {
    coords:{ lat: 35.520168, lng: -77.976017 },
    content: '<h3>Governor Charles B. Aycock Birthplace</h3>'
  },
  {
    coords:{ lat: 35.466782, lng: -79.383874 },
    content: '<h3>House in the Horseshoe</h3>'
  },
  {
    coords:{ lat: 36.268108, lng: -80.484680 },
    content: '<h3>Horne Creek Farm</h3>'
  },
  {
    coords:{ lat: 36.329965, lng: -77.589457 },
    content: '<h3>Historic Halifax</h3>'
  },
  {
    coords:{ lat: 36.061395, lng: -76.607885 },
    content: '<h3>Historic Edenton</h3>'
  },
  {
    coords:{ lat: 35.476909, lng: -76.811692 },
    content: '<h3>Historic Bath</h3>'
  },
  {
    coords:{ lat: 35.780306, lng: -78.639102 },
    content: '<h3>N.C. State Capitol</h3>'
  },
  {
    coords:{ lat: 35.688025, lng: -80.431023 },
    content: '<h3>North Carolina Transportation Museum</h3>'
  },
  {
    coords:{ lat: 35.077812, lng: -80.881794 },
    content: '<h3>President James K. Polk</h3>'
  },
  {
    coords:{ lat: 35.597442, lng: -82.551315 },
    content: '<h3>Thomas Wolfe Memorial</h3>'
  },
  {
    coords:{ lat: 35.910872, lng: -75.665750 },
    content: '<h3>Roanoke Island Festival Park</h3>'
  },
  {
    coords:{ lat: 35.700903, lng: -82.496284 },
    content: '<h3>Zebulon B. Vance Birthplace</h3>'
  }
];

$(document).ready( function () {
    console.log("jQuery Loaded");
});


function initMap() {
  //Map Options, Map centered on NC
  var options = {
    zoom: 7,
    center: { lat: 35.746024, lng: -79.198375 }
  }

  //Create Map
  var map = new google.maps.Map(document.getElementById("map"), options);

  //Loop Through markers
  for(var i = 0; i < markers.length; i++){
    addMarker(markers[i]);
  }

  //Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      icon:'img/marker-bold1.png',
    });

    //Add the info windows and event listeners
    var infoWindow = new google.maps.InfoWindow({
      content: props.content
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });

  }

}
