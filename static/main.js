var map = L.map('map').setView([17.302463, 74.191475], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
// 	minZoom: 0,
// 	maxZoom: 20,
// 	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	ext: 'png'
// });
// Stadia_AlidadeSmoothDark.addTo(map);

L.marker([17.302463, 74.191475], {}).bindPopup('I am here').addTo(map);
L.marker([17.302463, 74.192475]).addTo(map).bindPopup('I am here too');
L.marker([17.302463, 74.191275]).addTo(map).bindPopup('I am here too too');

var marker = L.marker([17.302363, 74.194475])
marker.addTo(map)
marker.bindPopup('I am here too too too')


var polygon = L.polygon([
    [17.302463, 74.191475],
    [17.3163, 74.199475],
    [17.322463, 74.191275]
], {
    color: 'red',
    fillColor: 'green',
    fillOpacity: 0.5
}).addTo(map);
polygon.bindPopup('I am here too too too too')

var circle = L.circle([17.302463, 74.191475], {
    color: 'red',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 500

}).addTo(map)

circle.bindPopup('I am here too too too too too')

