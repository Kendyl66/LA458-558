console.clear();

var map = L.map('map').setView([48.2, 16.366667], 12);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: 'ISUEO GIS',
  maxZoom: 18
}).addTo(map);

//font Awesome possible colors are as follows - no yellow?

//['red', 'blue', 'green', 'purple', 'orange', 'darkred', 'lightred', 'beige', 'darkblue', 'darkgreen', 'cadetblue', 'darkpurple', 'white', 'pink', 'lightblue', 'lightgreen', 'gray', 'black', 'lightgray']

var marker1 = L.marker([42.0, -93.09], {
		icon: L.AwesomeMarkers.icon({
			icon: 'flag', 
			prefix: 'fa', //from fonts awesome
			markerColor: 'green',
			iconColor: 'yellow',
			spin: true
		}) 
});
</html>