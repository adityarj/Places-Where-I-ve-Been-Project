var MyMap = L.map('MapMain').setView([1.334304, 103.856327], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'adityarj.0mbl5ab1',
    accessToken: 'pk.eyJ1IjoiYWRpdHlhcmoiLCJhIjoiY2lwczQ0dzFmMDJqcWZsbTI3bDJld2JoNSJ9.mpkJWXaUYoE1jtAn6a9Mvw'
}).addTo(MyMap);
