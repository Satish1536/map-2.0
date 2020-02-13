var mapModules = (function () {

    function renderOpenLayers() {
        var apiKey = 'sYiygsgnpE4nkvWftR1h';
        

        var tilegrid = ol.tilegrid.createXYZ({
            tileSize: 512,
            maxZoom: 12
        });
        var layer = new ol.layer.VectorTile({
            source: new ol.source.VectorTile({
                attributions: '© <a href="https://openmaptiles.org/">OpenMapTiles</a> ' +
                '© <a href="http://www.openstreetmap.org/copyright">' +
                'OpenStreetMap contributors</a>',
                format: new ol.format.MVT(),
                tileGrid: tilegrid,
                tilePixelRatio: 8,
                url: 'https://free-0.tilehosting.com/data/v3/{z}/{x}/{y}.pbf?key=' + apiKey
            })
        });

        var view = new ol.View({
            center: [0, 0],
            zoom: 2
        });

        var map = new ol.Map({
            target: 'map',
            view: view
        });

        fetch('https://openmaptiles.github.io/klokantech-basic-gl-style/style-cdn-undecorated.json').then(function (response) {
            response.json().then(function (glStyle) {
                olms.applyStyle(layer, glStyle, 'openmaptiles').then(function () {
                    map.addLayer(layer);
                });
            });
        });

    }

    function renderMapboxGlJS() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0aXNoLWt1bWFyMTUzNiIsImEiOiJjazY5NnB5ZmEwMDBjM2RxbjRtanRrbjJnIn0.sHjqxHHZh3bOdDfZUFXw8Q';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [73.760854,18.598632],
            zoom: 4
        });
    


        map.on('load', function () {
            map.addLayer({
                id: 'terrain-data',
                type: 'line',
                source: {
                    type: 'vector',
                    url: 'mapbox://mapbox.mapbox-terrain-v2'
                },
                'source-layer': 'contour'
            });
        });


        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
  
        // make a marker for each feature and add to the map
        //  var marker1 = new mapboxgl.Marker({
        //     draggable: true
        //     }).setLngLat([73.760854,18.598632]).addTo(map);  

        var marker2 = new mapboxgl.Marker(el)
            .setLngLat([77.44858051067041,22.652306964131753])
            .addTo(map);
        
        marker2.setDraggable(true);
        map.on('click', function (e)
        {                        
            // console.log(marker1);
            // console.log(marker1.getLngLat());
            
            var latlong = e.lngLat;
            // var latlongstr = String(latlong["lat"]) +  " -- " + String(latlong["lng"]);
            console.log(latlong);
            marker2.setLngLat(latlong);
            
        });
        
        
    }

    return {
        renderOpenLayers: renderOpenLayers,
        renderMapboxGlJS: renderMapboxGlJS
    };

})();
