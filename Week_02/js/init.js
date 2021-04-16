// JavaScript const variable declaration
const map = L.map('map').setView([34.0709, -118.444], 5);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//JavaScript let variable declaration to create a marker
let marker = L.marker([34.0945, -118.0905]).addTo(map)
		.bindPopup('✿ San Gabriel Nursery & Florist (a local, Asian-owned garden supply center founded in 1923)')
		.openPopup();

let marker2 = L.marker([33.0945, -118.0905]).addTo(map)
		.bindPopup('✿ San Gabriel Nursery & Florist (a local, Asian-owned garden supply center founded in 1923)')
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