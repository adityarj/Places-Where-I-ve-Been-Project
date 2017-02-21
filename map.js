var colorList = ['#d9f0a3','#addd8e','#78c679','#31a354','#006837'];

var color = d3.scaleOrdinal()
				.domain(0,10)
				.range(colorList);

var MyMap = L.map('MapMain').setView([1.334304, 103.856327], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'adityarj.0mbl5ab1',
    accessToken: 'pk.eyJ1IjoiYWRpdHlhcmoiLCJhIjoiY2lwczQ0dzFmMDJqcWZsbTI3bDJld2JoNSJ9.mpkJWXaUYoE1jtAn6a9Mvw'
}).addTo(MyMap);

var popupCSS = {
	'className': 'popup'
};

d3.csv("data.csv", function(data) {
	data.forEach(function(entry) {
		console.log(color(entry.Times));
		L.circleMarker([entry.Lat,entry.Long], {
			color: color(entry.Times),
			fillOpacity: 0.5,
			radius: 5
		}).bindPopup(popupTextGen(entry.Place,entry.Date,entry.Reason),popupCSS).addTo(MyMap);
	})
});

var legendTitles = d3.select('#rightLegend')
	.append('div')
	.attr('class','firstDiv')
	.selectAll('.legendTitles')
	.data(colorList)
	.enter()
	.append('div')
	.attr('class','legendTitles')
	.text(function(d,i) {
		return i+1;
	})

var legend = d3.select("#rightLegend")
	.append('div')
	.attr('class','firstDiv')
	.selectAll('.legendBox')
	.data(colorList)
	.enter()
	.append('div')
	.attr('class','legendBox')
	.style('background-color',function(d) {
		return d;
	});

function popupTextGen(text,date,reason) {
	return "<span class='popUprow titlePopup'><p><b>"+text+"</b></span><span class='popUprow datePopup'>, "+date+"</p></span>"+
			"<div class='separate'></div>"+
			"<span class='popUprow'><p>"+reason+"</p></span>";
}
