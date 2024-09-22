function initMap(){
    const kyiv = {lat: 50.4501, lng: 30.5234};

    const map = new goole.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: kyiv
    });

    const marker = new goole.maps.Marker({
        position: kyiv,
        map: map,
        title: 'Київ'
    });
}