function initMap() {
    const cityCenter = { lat: 22.7196, lng: 75.8577 };//Indore
    const map  = new google.maps.Map(document.getElementById("map"),{
        zoom: 12,
        center:cityCenter,
    });
    //Dummy Accident data around Indore
    const accidentData = [
        new google.maps.LatLng(22.7215,75.8590),
        new google.maps.LatLng(22.7180,75.8545),
        new google.maps.LatLng(22.7242,75.8608),
        new google.maps.LatLng(22.7196,75.8577),
        new google.maps.LatLng(22.7163,75.8529),
    ];
    const heatmap = new google.maps.visualization.HeatmapLayer({
        data: accidentData,
        map: map,
        radius: 40,
    });
}
window.onload = initMap;