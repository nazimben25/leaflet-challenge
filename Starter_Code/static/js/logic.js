// Creating the map object
let myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 3
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
// Store the API query variables.

  
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
console.log(url)

  // Get the data with d3.
  d3.json(url).then(function(response) { console.log(response); 
    // Create a new marker cluster group. 

   
    // Loop through the features array in the response using a for loop. 
    for (let i = 0; i <  response.features.length; i++) {
                                                        // retrieve coordinates from json file and store them in variables
                                                        let latitude = response.features[i].geometry.coordinates[0] ;
                                                        let longitude = response.features[i].geometry.coordinates[1] ; 

                                                        // retrieve size of earthquake as Magnitude from json file and store it in variables                                                        
                                                        let mag = response.features[i].properties.mag;
                                                        
                                                        
                                                        
                                                        L.circle([longitude, latitude], {
                                                                                                                        fillOpacity: 0.75,
                                                                                                                        color: "red",
                                                                                                                        fillColor: "purple",
                                                                                                                        // Setting our circle's radius to equal the output of our markerSize() function:
                                                                                                                        // This will make our marker's size proportionate to its population.
                                                                                                                        radius: mag*10000
                                                                                                                    })
                                                    .addTo(myMap)  ;


   
    }
 
  });

// // this code works but as marker cluster
//   // Get the data with d3.
//   d3.json(url).then(function(response) { console.log(response); 
//     // Create a new marker cluster group. 
//     let markers = L.markerClusterGroup(); let locationsList = []; 
    
//     // Loop through the features array in the response using a for loop. 
    
//     for (let i = 0; i < response.features.length; i++) { 
//         // Set the data location property to a variable. 
//          

//         // Check for the location property. 
        
//         if (location) { 
//         // Add a new marker to the cluster group, and bind a popup. 
        
//         markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])); locationsList.push(location);    
//     }
  
//     }

//     console.log(`location list is ${locationsList}`)
//     // Add our marker cluster layer to the map.
//     myMap.addLayer(markers);
  
//   });