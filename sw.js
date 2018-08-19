self.addEventListener('install', function (event) {
    console.log('installing...')

    event.waitUntil(
        caches.open('v1').then(function (cache) {
            console.log('caching...')
            return cache.addAll([
                'http://localhost:5500/data/restaurants.json', // google's new law
                '/',
                '/js/main.js',
                '/css/styles.css',
                '/img/',
                '/data/restaurants.json',
                '/index.html',
                '/restaurant.html',
                '/restaurant.html?id=1',
                '/restaurant.html?id=2',
                '/restaurant.html?id=3',
                '/restaurant.html?id=4',
                '/restaurant.html?id=5',
                '/restaurant.html?id=6',
                '/restaurant.html?id=7',
                '/restaurant.html?id=8',
                '/restaurant.html?id=9',
                '/restaurant.html?id=10',
                '/js/dbhelper.js',
                '/js/restaurant_info.js',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
                'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoiYWxhbmNvZGUiLCJhIjoiY2prcHRjY3ZjMWF2eDNxb3phejhpOHU3MCJ9.xgMZtPDXEgXAEW9pnVCFFQ',
                'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoiYWxhbmNvZGUiLCJhIjoiY2prcHRjY3ZjMWF2eDNxb3phejhpOHU3MCJ9.xgMZtPDXEgXAEW9pnVCFFQ',
                'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1IjoiYWxhbmNvZGUiLCJhIjoiY2prcHRjY3ZjMWF2eDNxb3phejhpOHU3MCJ9.xgMZtPDXEgXAEW9pnVCFFQ',
                'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
                'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=pk.eyJ1IjoiYWxhbmNvZGUiLCJhIjoiY2prcHRjY3ZjMWF2eDNxb3phejhpOHU3MCJ9.xgMZtPDXEgXAEW9pnVCFFQ',
                'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=pk.eyJ1IjoiYWxhbmNvZGUiLCJhIjoiY2prcHRjY3ZjMWF2eDNxb3phejhpOHU3MCJ9.xgMZtPDXEgXAEW9pnVCFFQ',
                'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1539.jpg70?access_token=pk.eyJ1IjoiYWxhbmNvZGUiLCJhIjoiY2prcHRjY3ZjMWF2eDNxb3phejhpOHU3MCJ9.xgMZtPDXEgXAEW9pnVCFFQ',
                'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?access_token=pk.eyJ1IjoiYWxhbmNvZGUiLCJhIjoiY2prcHRjY3ZjMWF2eDNxb3phejhpOHU3MCJ9.xgMZtPDXEgXAEW9pnVCFFQ',
                'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1540.jpg70?access_token=pk.eyJ1IjoiYWxhbmNvZGUiLCJhIjoiY2prcHRjY3ZjMWF2eDNxb3phejhpOHU3MCJ9.xgMZtPDXEgXAEW9pnVCFFQ',
                'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?access_token=pk.eyJ1IjoiYWxhbmNvZGUiLCJhIjoiY2prcHRjY3ZjMWF2eDNxb3phejhpOHU3MCJ9.xgMZtPDXEgXAEW9pnVCFFQ',
                '/data/restaurants.json',
                'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png'

            ]);

        }).then(function () {
            console.log('all done');

        })
    )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) console.log(response);
            return response;
            console.log(response);
            return fetch(event.request);
        })
    )
});