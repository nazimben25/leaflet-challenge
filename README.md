# leaflet-challenge

output for challenge 15 : leaflet

1) reporsitory organization


2) use the reporsitory

to run the code, use html file : leaflet-challenge\Starter_Code\index.html
to access the code, use JS file : eaflet-challenge\Starter_Code\static\js\logic.js


3) contexte
choose a dataset to visualize from The USGS (provides earthquake data in a number of different formats, updated every 5 minutes). 
Visit the USGS GeoJSON [FeedLinks to an external site. page and](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

    - dataset choosen was last 7days (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)
    - update dec 11th, 2024

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

the data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color

    - Earthquakes with higher magnitudes should appear larger, 
    - earthquakes with greater depth should appear darker in color.

Include popups that provide additional information about the earthquake when its associated marker is clicked.
    Additional information added is: place, magnitude, depth and date

Create a legend that will provide context for your map data.



4) external help
chat-GPt for function 'formatUnixTime' used to convert dates from UNIX


