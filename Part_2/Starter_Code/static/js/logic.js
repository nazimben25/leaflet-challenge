// Store our API endpoint as queryUrl.
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
 
// Perform a GET request to the query URL/
d3.json(url).then(function (response) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(response.features);
});


function createFeatures(earthquakeData) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>`);
  }

// Define a function to create circle markers with custom styles 
function pointToLayer(feature, latlng) { 
    let mag = feature.properties.mag; 
    let depth = feature.geometry.coordinates[2]; 
    return L.circleMarker(latlng, { radius: mag * 2, 
        
        // Adjust size based on magnitude 
        fillColor: colorscale(depth), 
        color: "black", 
        weight: 1, 
        opacity: 1, 
        fillOpacity: 0.8
    }); }


  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  let earthquakes = L.geoJSON(earthquakeData, {
    pointToLayer: pointToLayer, // Use pointToLayer to create circle markers
    onEachFeature: onEachFeature // Bind popups to each circle marker
  });

  // Send our earthquakes layer to the createMap function/
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Create the base layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  let topo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
  });

  // Create a baseMaps object.
  let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  let overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  let myMap = L.map("map", {
    center: [
        57.47, -152.23
    ],
    zoom: 5.3,
    layers: [street, earthquakes]
  });

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  let link_tecto = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

  // Getting our GeoJSON data
  d3.json(link_tecto).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(myMap);
  });


}
function colorscale(depth) {
    if (depth > 70) {
        return "#FF4500"; // orange red
    } else if (depth > 50) {
        return "#FFA500"; //orange
    } else if (depth > 30) {
        return "#FAFAD2"; //LightGoldenRodYellow
    } else if (depth > 10) {
        return "#ADFF2F"; // Greenyellow
    } else {
        return "#008000"; // Green
    }
}




