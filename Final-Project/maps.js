var osm = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      });
        var esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
    var map = L.map('map', {center: [41.590833, -93.620833],
                           zoom: 11,
                           layers: [osm]
                           });
  // need to put in colors depending on percent value for each map, so I will have 
    function getColor(d) {
        return d > 20 ? '#b10026' :
        d > 10 ? '#f03b20' :
        d > 5 ? '#fd8d3c' :
        d > 1 ? '#fecc5c' :
        d > 0 ?'#ffffcc' :
        '#FFFFFF'; //this will be the default if none of the above match these numbers
    }
    //now i need to set the function for style
        function style(feature) {
            return {
                fillColor: getColor(feature.properties.Percent_To * 100),
                stroke: true,
                weight: 2,
                color: '#000000',
                opacity: 1.0,
                fillOpacity: 0.6, 
                //dashArray: '3'
            };
        }
          
          
function getColor2(d) {
        return d > 20 ? '#b10026' :
        d > 10 ? '#f03b20' :
        d > 5 ? '#fd8d3c' :
        d > 1 ? '#fecc5c' :
        d > 0 ?'#ffffcc' :
        '#FFFFFF'; //this will be the default if none of the above match these numbers
    }
    //now i need to set the function for style
        function style2(feature) {
            return {
                fillColor: getColor2(feature.properties.PerTot * 100),
                stroke: true,
                weight: 2,
                color: '#000000',
                opacity: 1.0,
                fillOpacity: 0.6, 
                //dashArray: '3'
            };
        }
function getColor3(d) {
        return d > 20 ? '#b10026' :
        d > 10 ? '#f03b20' :
        d > 5 ? '#fd8d3c' :
        d > 1 ? '#fecc5c' :
        d > 0 ?'#ffffcc' :
        '#FFFFFF'; //this will be the default if none of the above match these numbers
    }
    //now i need to set the function for style
        function style3(feature) {
            return {
                fillColor: getColor3(feature.properties.PERCB * 100),
                stroke: true,
                weight: 2,
                color: '#000000',
                opacity: 1.0,
                fillOpacity: 0.6, 
                //dashArray: '3'
            };
        }
function getColor4(d) {
        return d > 20 ? '#b10026' :
        d > 10 ? '#f03b20' :
        d > 5 ? '#fd8d3c' :
        d > 1 ? '#fecc5c' :
        d > 0 ?'#ffffcc' :
        '#FFFFFF'; //this will be the default if none of the above match these numbers
    }
    //now i need to set the function for style
        function style4(feature) {
            return {
                fillColor: getColor4(feature.properties.PERCB * 100),
                stroke: true,
                weight: 2,
                color: '#000000',
                opacity: 1.0,
                fillOpacity: 0.6, 
                //dashArray: '3'
            };
        };
 
//Load GeoJSON files for each year
var geojsonLayer = new L.GeoJSON.AJAX("https://kendyl66.github.io/LA458-558/Final-Project/1940.geojson", {
  style: style,
});

geojsonLayer.addTo(map);

//Load GeoJSON
var geojsonLayer2 = new L.GeoJSON.AJAX("https://kendyl66.github.io/LA458-558/Final-Project/1970.geojson", {
 style: style2,
});
    
var geojsonLayer3 = new L.GeoJSON.AJAX("https://kendyl66.github.io/LA458-558/Final-Project/2000.geojson", {
style: style3,
});

var geojsonLayer4 = new L.GeoJSON.AJAX("https://kendyl66.github.io/LA458-558/Final-Project/2010.geojson", {
style: style4,
});


        var baseMaps = {
        "OpenStreetMap": osm,
        "Satellite View": esriWorldImagery,
    };
        var overlayMaps = {
            "1940": geojsonLayer,
            "1970": geojsonLayer2,
            "2000": geojsonLayer3,
            "2010": geojsonLayer4,  
        };
          
    L.control.layers(baseMaps, overlayMaps).addTo(map);
   
    // loading in each different legend
var legend1 = L.control({ 
    position: 'bottomleft'});
     
legend1.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'); 
     var breaks = [1,2,6,11,30];
    var labels = ['0%', '1%-5%', '6%-10%', '11%-20%','21% and Greater'];    
           
        div.innerHTML += "<b>African American Population</b> <br>"
         
    for (var i = 0; i <breaks.length; i++){ 
    div.innerHTML +=
        '<i style="background:' + getColor(breaks[i]) + ' "></i> ' + labels[i] + (breaks ? '' + '<br>' : '');
        }
    return div;
     };
          

          
     legend1.addTo(map);