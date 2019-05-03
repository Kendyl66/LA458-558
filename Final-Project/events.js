var osm = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});
        var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

var Stamen_TonerHybrid = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});
          var map = L.map('map', {center: [41.590833, -93.620833],
                           zoom: 9,
                           layers: [osm]
                           });
    var baseMaps = {
        "OpenStreetMap": osm,
        ",Streets":Esri_WorldStreetMap
    };
    var overlay = {
        "Stamen Outline": Stamen_TonerHybrid
    };   
    L.control.layers(baseMaps, overlay).addTo(map);

var event = L.AwesomeMarkers.icon({
  icon: 'calendar',
  prefix: 'fa', //font awesome 
  markerColor: 'blue', 
  iconColor: 'white',
  extraClasses: 'fas', //this might not be needed
});
     // I decided to use the var marker_ in order to keep my items more organized
    var marker_1 = L.marker([41.5989, -93.6392], {icon: event}).bindPopup('Good Park Riot of 1966: Read more on the History Timeline Page').addTo(map);

    var marker_2 = L.marker([48.184722, 16.302778], {icon: event}).addTo(map);

    var marker_3 = L.marker([48.208056, 16.361111], {icon: event}).addTo(map);

    var marker_4 = L.marker([48.234, 16.415], {icon: event}).addTo(map);
        