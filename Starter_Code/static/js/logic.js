// Creating the map object
let myMap = L.map("map", {
    // define center as town of provo,ut,USA
    center: [40.14, -111.39],
    zoom: 5.3
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
// Store the API query variables.
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
console.log(url)

  // Get the data with d3.
  d3.json(url).then(function(response) { 
    console.log(response); 

    // Loop through the features array in the response using a for loop. 
    for (let i = 0; i <  response.features.length; i++) {
                                                        // retrieve coordinates from json file and store them in variables
                                                        let latitude = response.features[i].geometry.coordinates[0] ;
                                                        let longitude = response.features[i].geometry.coordinates[1] ; 

                                                        // retrieve size and depth of earthquake as Magnitude from json file and store it in variables                                                        
                                                        let mag = response.features[i].properties.mag;
                                                        let depth = response.features[i].geometry.coordinates[2] ;

                                                        // retrieve other elements to be used in popup from json file and store it in variables    
                                                        let place = response.features[i].properties.place ;                                                                                                                                              
                                                        let time =  response.features[i].properties.time ;
                                                                    // Format the Unix time const using formatUnixTime (see below)
                                                                    formattedTime = formatUnixTime(time);

                                                        // create circle marker  with 
                                                        // marker's size proportional to the magnitude (x10000 for visibility)
                                                        // color follows of the depth 
                                                        L.circle([longitude, latitude], {
                                                                                        fillOpacity: 0.75,
                                                                                        color: "white",
                                                                                        fillColor: colorscale(depth),
                                                                                        // Setting our circle's radius to equal the output of our markerSize() function:
                                                                                        // This will make our marker's size proportionate to its population.
                                                                                        radius: mag*10000
                                                                                        })
    
    // popups that provide additional information : place, magnitude, depth and date
    .bindPopup(`<h2>Place : ${place}</h2><hr><h3>Magnitude : ${mag}</h3><hr><h3>Depth : ${depth}</h3><hr><h3>Date (mm/dd/yyyy): ${formattedTime}</h3>`)
    .addTo(myMap)  ;

}

    // Add legend to the map
    const legend = L.control({ position: "bottomright" });
  
    legend.onAdd = function(map) {

        const div = L.DomUtil.create("div", "info legend");

        const depths = ["<10", "10-30", "30-50", "50-70", "70+"];
        // const labels = ["<10", "10-30", "30-50", "50-70", "70+"];
        const colors = ["#008000", "#ADFF2F", "#FAFAD2", "#FFA500", "#FF4500"];
  
    // Generate a label with a colored square for each interval 
    for (let i = 0; i < depths.length; i++) { 
                    div.innerHTML += 
                    '<i style="background:' + colors[i] + '"></i> ' +
                     depths[i] + '<br>'
                } 
    return div;
    };
  
    legend.addTo(myMap);



});

// function "colorscale" to assign a color to different depths
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



// Function to convert Unix timestamp to MM-DD-YYYY T format (code From ChatGPT)
function formatUnixTime(unixTime) { 
const date = new Date(unixTime );  
const month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero 
const day = ("0" + date.getDate()).slice(-2); // Add leading zero 
const year = date.getFullYear(); 
return `${month}-${day}-${year}`; } 

