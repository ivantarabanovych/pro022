let map, marker;

function initMap(){
    const kyiv = {lat: 50.4501, lng: 30.5234};

    map = new goole.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: kyiv
    });

    marker = new goole.maps.Marker({
        position: kyiv,
        map: map,
        title: 'Ваша локація'
    });

    getUserLocation();
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const userPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                document.getElementById('lat').textContent = userPosition.lat.toFixed(5);
                document.getElementById('lng').textContent = userPosition.lng.toFixed(5);

                marker.setPosition(userPosition);

                map.setCenter(userPosition);
            },
            error => {
                alert("Не вдалося отримати ваше місцеперебування. Перевірте налаштування доступу до геолокації.");
            }
        );
    } else {
        alert("Ваш браузер не підтримує Geolocation API.");
    }
}