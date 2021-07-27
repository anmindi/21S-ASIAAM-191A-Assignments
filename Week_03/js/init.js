// declare variables
let zoomLevel = 14;
let mapCenter = [34.052235,-118.243683];

// use the variables
const map = L.map('map').setView(mapCenter, zoomLevel);
let mapConfig = {"center": [34.052235,-118.243683], "zoomLevel":5}

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`${message}`);
    createButtons(lat,lng,title); // new line!!!
    return message;
}

// create a function to add buttons with a fly to command
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 

    // attach an event listner to the button with Leaflet's map.flyTo
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
}

// use our marker functions
addMarker(34.075083, -118.440067,"Picnics are a great time to ketchup with friends", " <h2>@UCLA Sculpture Garden</h2> <p>A celebratory day for my Asian Am. Studies cohort</p> <img width = 300px height = 300% src = 'picnic2.jpeg'>")
addMarker(34.062895, -118.357837,"Princess of Snooze", " <h2>@LACMA</h2> <p>By Toshi Nara, 2001</p> <img width = 300px height = 400px src = 'lacma.jpg'>")
addMarker(34.205213, -118.225996,"Please don't touch the plants","<h2>@Lost Books</h2> <p>A surprise find</p> <img width = 200px height = 100% src = 'books.jpg'>")
addMarker(33.83469, -116.546861,"Phenomenal","<h2>@Eight4Nine Lounge</h2> <p>Celebrating my best friend's birthday</p> <img width = 200px height = 100% src = 'mo.jpg'>")