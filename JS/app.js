
const map_US = [
    {
        name : "Verrazano-Narrows Bridge",
        city : "New York, NY",
        span : 1298.4,
        location: [40.6066, -74.0447]
    },
    {
        name : "Golden Gate Bridge",
        city : "San Francisco and Marin, CA",
        span : 1280.2,
        location: [37.8199, -122.4783]
    },
    {
        name : "Mackinac Bridge",
        city : "Mackinaw and St Ignace, MI",
        span :  1158.0,
        location: [45.8174, -84.7278]
    },
    {
        name : "George Washington Bridge",
        city : "New York, NY and New Jersey, NJ",
        span :  1067.0,
        location: [40.8517, -73.9527]
    },
    {
        name : "Tacoma Narrows Bridge",
        city : "Tacoma and Kitsap, WA",
        span :  853.44,
        location: [47.2690, -122.5517] 
} ];


let zoomLevel = 4;
let US_coordinates = [40.0379411,-98.5021668,5]
// Create the map 
let map = L.map('longest-bridgesUS').setView(US_coordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map);

//Creating the icons
const BridgeIcon =  L.icon({
    iconUrl: "./CSS/img/icons8-bridge-32.png",
    iconSize:     [20, 27]
})

//Function to know the longest bridge in US
const longest_bridge_metrics = [];
map_US.forEach((br)=>{
    longest_bridge_metrics.push(br.span);
});

console.log(longest_bridge_metrics);

map_US.forEach((bridge)=>{

    L.marker(bridge.location, {icon: BridgeIcon}).bindPopup(`<strong>Name:</strong> ${bridge.name} <br> 
    <strong> City:</strong> ${bridge.city} <br> 
    <strong> Span:</strong> ${bridge.span}`).addTo(map);
});
