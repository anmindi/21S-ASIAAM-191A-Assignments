// JavaScript const variable declaration
const map = L.map('map').setView([36.778259, -119.417931], 5);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//JavaScript let variable declaration to create a marker
let marker = L.marker([34.0365, -118.2465]).addTo(map)
		.bindPopup('✿ API Forward Movement')
		.openPopup();

let marker2 = L.marker([34.0014, -118.3311]).addTo(map)
		.bindPopup('✿ Asian American Drug Abuse Program')
		.openPopup();

let marker3 = L.marker([36.9977, -122.0555]).addTo(map)
		.bindPopup('✿ Psychology Lab with Dr. Azmitia')
		.openPopup();

let marker4 = L.marker([37.0016, -122.0587]).addTo(map)
		.bindPopup('✿ Asian American/Pacific Islander Resource Center')
		.openPopup();


fetch("js/map.geojson")
	.then(response => {
		return response.json();
		})
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
                        // the leaflet method for adding a geojson
            L.geoJSON(data, {
                style: function (feature) {
                    return {color: 'red'};
                }
            }).bindPopup(function (layer) {
                return layer.feature.properties.name;
            }).addTo(map);
        });

		function customMarker (feature, latlng) {
			return L.circleMarker(latlng, { color: feature.properties.color })
		  }
		  
		  // create an options object
		  let myLayerOptions = {
			pointToLayer: customMarker
		  }