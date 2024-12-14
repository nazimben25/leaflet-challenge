# leaflet-challenge

output for challenge 15 : leaflet

1) reporsitory organization


2) use of the reporsitory

- to run the code, use html file : leaflet-challenge\Starter_Code\index.html
- to access the code, use JS file : leaflet-challenge\Starter_Code\static\js\logic.js
- CSS FILE : static/css/style.css

3) contexte
choose a dataset to visualize from The USGS (provides earthquake data in a number of different formats, updated every 5 minutes). 
Visit the USGS GeoJSON [FeedLinks to an external site. page and](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

    - dataset choosen was last 7days (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)


Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

the data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color

    - Earthquakes with higher magnitudes should appear larger, 
    - earthquakes with greater depth should appear darker in color.

Include popups that provide additional information about the earthquake when its associated marker is clicked.
    Additional information added is: place, magnitude, depth and date

Create a legend that will provide context for your map data.

4) data source
    - API : dataset choosen was last 7days (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

    - map : https://www.openstreetmap.org/copyright

5) libraries
    - Leaflet CSS
    - Leaflet JS 
    - Leaflet MarkerCluster JS
    - D3 JavaScript

6) external help
chat-GPt for function 'formatUnixTime' used to convert dates from UNIX
    => line 107

chat-GPt to build legend
- add info.legend to css file 
    => line 12




