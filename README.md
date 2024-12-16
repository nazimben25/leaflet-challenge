# leaflet-challenge

output for challenge 15 : leaflet

1) reporsitory organization
there are 2 directories, each one related to a part of the challenge
they are totally independant one from each other

    Part 1
        visualize an earthquake dataset

    part 2
        Plot a dataset on the map to illustrate the relationship between tectonic plates and seismic activity


2) use of the reporsitory

for part 1
    - to run the code, use html file : leaflet-challenge\Part_1\Starter_Code\index.html
    - to access the code, use JS file : leaflet-challenge\Part_1\Starter_Code\static\js\logic.js
    - CSS FILE : leaflet-challenge\Part_1\Starter_Code\static\css\style.css

for part 2
    - to run the code, use html file : leaflet-challenge\Part_2\Starter_Code\index.html
    - to access the code, use JS file : leaflet-challenge\Part_2\Starter_Code\static\js\logic.js
    - CSS FILE : leaflet-challenge\Part_2\Starter_Code\static\css\style.css

3) PART 1
        3.1) contexte
        choose a dataset to visualize from The USGS (provides earthquake data in a number of different formats, updated every 5 minutes). 
        Visit the USGS GeoJSON [FeedLinks to an external site. page and](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

            - dataset choosen was last 7days (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)


        Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

        the data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color

            - Earthquakes with higher magnitudes should appear larger, 
            - earthquakes with greater depth should appear darker in color.

        Include popups that provide additional information about the earthquake when its associated marker is clicked.
            Additional information added is: place, magnitude, depth and date

        Create a legend that will provide context for your map data.

        3.2) data source
            - API : dataset choosen was last 7days (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

            - map : https://www.openstreetmap.org/copyright

        3.3) libraries
            - Leaflet CSS
            - Leaflet JS 
            - Leaflet MarkerCluster JS
            - D3 JavaScript

        3.4) external help
        chat-GPt for function 'formatUnixTime' used to convert dates from UNIX
            => line 107

        chat-GPt to build legend
        - add info.legend to css file 
            => line 12


4) part 2
       3.1) contexte
       same as part 1

       additionaly 

       - new map layout : dark satellite as topo
       - tectonic plates diplayed on the same map
       - control button to choose between the 2 maps, and to activate the eartquatkes

       
        the popups that provide additional information about the earthquake when its associated marker is clicked :  place and date
        map data.

        3.2) data source
            - earthquakes 
            API : dataset choosen was last 7days (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

            - for tectonic plates : "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

            - maps : https://www.openstreetmap.org/copyright

        3.3) libraries
            - Leaflet CSS
            - Leaflet JS 
            - Leaflet MarkerCluster JS
            - D3 JavaScript

        3.4) external help
            activity 10 of day 1 week 15 of the bootcamp

            chatgpt, to insert the tectonic plates in the right place of the code

