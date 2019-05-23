var osm = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      });
        var esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
    var map = L.map('map', {center: [41.590833, -93.620833],
                           zoom: 12,
                           layers: [osm]
                           });


  // need to put in colors depending on percent value for each map, so I will have 
    function getColor(d) {
        return d > 20 ? '#5e3c99' :
        d > 10 ? '#b2abd2' :
        d > 5 ? '#f7f7f7' :
        d > 1 ? '#fdb863' :
        d > 0 ?'#e66101' :
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
        return d > 20 ? '#5e3c99' :
        d > 10 ? '#b2abd2' :
        d > 5 ? '#f7f7f7' :
        d > 1 ? '#fdb863' :
        d > 0 ?'#e66101':
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
        return d > 20 ? '#5e3c99' :
        d > 10 ? '#b2abd2' :
        d > 5 ? '#f7f7f7' :
        d > 1 ? '#fdb863' :
        d > 0 ?'#e66101' :
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
        return d > 20 ? '#5e3c99' :
        d > 10 ? '#b2abd2' :
        d > 5 ? '#f7f7f7' :
        d > 1 ? '#fdb863' :
        d > 0 ?'#e66101' :
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
        }
function getColor5(d) {
        return d == 4 ? '#005824' :
        d == 3 ? '#0570b0' :
        d == 2 ? '#fe9929' :
        d == 1 ? '#99000d' :
        '#FFFFFF'; //this will be the default if none of the above match these numbers
    }
    //now i need to set the function for style
        function style5(feature) {
            return {
                fillColor: getColor5(feature.properties.HOLC_N),
                stroke: true,
                weight: 2,
                color: '#000000',
                opacity: 1.0,
                fillOpacity: 0.6, 
                //dashArray: '3'
            };
        }
function getColor6(d) {
        return d == 0 ? '#ffffff' :
        '#FFFFFF'; //this will be the default if none of the above match these numbers
    }
    //now i need to set the function for style
        function style6(feature) {
            return {
                fillColor: getColor6(feature.properties.CityFIPS),
                stroke: true,
                weight: 2,
                color: '#000000',
                opacity: 1.0,
                fillOpacity: 0, 
                //dashArray: '3'
            };
        }

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
        info.update(layer.feature.properties);
    }
}
function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
}
function resetHighlight2(e) {
    geojsonLayer2.resetStyle(e.target);
}
function resetHighlight3(e) {
    geojsonLayer3.resetStyle(e.target);
}
function resetHighlight4(e) {
    geojsonLayer4.resetStyle(e.target);
}
function resetHighlight5(e) {
    geojsonLayer5.resetStyle(e.target);
}
function resetHighlight6(e) {
    geojsonLayer6.resetStyle(e.target);
}

//function zoomToFeature(e) {
    //map.fitBounds(e.target.getBounds());
//}
function onEachFeature(feature, layer) {
    total =  feature.properties.Total.toLocaleString();
  
    percent = (feature.properties.Percent_To * 100).toFixed(2) + '%';
    
    tract = feature.properties.TRACTA.toLocaleString();
  

  layer.bindPopup('<strong>Census Tract: </strong>'+ tract + '<br>Percent: ' + percent),
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        //click: zoomToFeature
    })
}
function onEachFeature1(feature, layer) {
    total =  feature.properties.CY7001.toLocaleString();
  
    percent = (feature.properties.PerTot * 100).toFixed(2) + '%';
    
    tract = feature.properties.AREANAME.toLocaleString();
  
  layer.bindPopup('<strong>Census Tract: </strong>'+ tract + '<br>Percent: ' + percent),
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight2,
        //click: zoomToFeature
    })
}
function onEachFeature2(feature, layer) {
     total =  feature.properties.Total_Pop.toLocaleString();
  
    percent = (feature.properties.PERCB * 100).toFixed(2) + '%';
    
    tract = feature.properties.AreaName.toLocaleString();
  
  layer.bindPopup('<strong>Census Tract: </strong>'+ tract + '<br>Percent: ' + percent),
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight3,
        //click: zoomToFeature
    })
}
function onEachFeature3(feature, layer) {
    total =  feature.properties.Pop.toLocaleString();
  
    percent = (feature.properties.PERCB * 100).toFixed(2) + '%';
    
    tract = feature.properties.NAME10.toLocaleString();
  
  layer.bindPopup('<strong>Census Tract: </strong>'+ tract + '<br>Percent: ' + percent),
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight4,
        //click: zoomToFeature
    })
}
function onEachFeature5(feature, layer) {
    grade =  feature.properties.HOLC_Grade.toLocaleString();
  
  layer.bindPopup('<strong>HOLC Grade: </strong>'+ grade),
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight5,
        //click: zoomToFeature
    })
}
//for each polygon 

//Load GeoJSON files for each year
var geojsonLayer = new L.GeoJSON.AJAX("https://kendyl66.github.io/LA458-558/Final-Project/1940.geojson", {
  style: style,
    onEachFeature: onEachFeature
});

geojsonLayer.addTo(map);

//Load GeoJSON
var geojsonLayer2 = new L.GeoJSON.AJAX("https://kendyl66.github.io/LA458-558/Final-Project/1970.geojson", {
 style: style2,
    onEachFeature: onEachFeature1
});
    
var geojsonLayer3 = new L.GeoJSON.AJAX("https://kendyl66.github.io/LA458-558/Final-Project/2000.geojson", {
style: style3,
    onEachFeature: onEachFeature2
});

var geojsonLayer4 = new L.GeoJSON.AJAX("https://kendyl66.github.io/LA458-558/Final-Project/2010.geojson", {
style: style4,
    onEachFeature: onEachFeature3
});

var geojsonLayer5 = new L.GeoJSON.AJAX("https://kendyl66.github.io/LA458-558/Final-Project/DesMoines_red.geojson", {
style: style5,
onEachFeature: onEachFeature5
});

var geojsonLayer6 = new L.GeoJSON.AJAX("https://kendyl66.github.io/LA458-558/Final-Project/dsm.geojson", {
style: style6,
});
//I was unable to figure out how to properly put pop up tools on my maps, but I intend to figure this out soon. 
        var baseMaps = {
        "OpenStreetMap": osm,
        "Satellite View": esriWorldImagery,
    };
        var overlayMaps = {
            "1940": geojsonLayer,
            "1970": geojsonLayer2,
            "2000": geojsonLayer3,
            "2010": geojsonLayer4,
            "HOLC Map": geojsonLayer5,
            "City": geojsonLayer6,

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

var legend2 = L.control({ 
    position: 'bottomright'});
     
legend2.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'); 
     var breaks = [4,3,2,1];
    var labels = ['A', 'B', 'C', 'D'];    
           
        div.innerHTML += "<b>HOLC Redlining Map</b> <br>"
         
    for (var i = 0; i <breaks.length; i++){ 
    div.innerHTML +=
        '<i style="background:' + getColor5(breaks[i]) + ' "></i> ' + labels[i] + (breaks ? '' + '<br>' : '');
        }
    return div;
     };
          

          
     legend2.addTo(map);