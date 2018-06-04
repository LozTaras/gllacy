function initMap() {
  var elem = document.querySelector('#google-map');

    var options = {
    zoom: 17,
    center: { lat: 59.938755, lng: 30.326361},
  };

  var map = new google.maps.Map(elem, options);

  var marker = new google.maps.Marker({
    position: { lat: 59.938526, lng: 30.323683},
    map: map,
    icon: 'img/pin.png',
  });
}

(function() {
  var adressDetails = document.querySelector('.shop-adress-details');
  var map = document.querySelector('.map-wrapper');

  map.addEventListener('mousedown', function() {
    adressDetails.classList.add('hide');
  });

  map.addEventListener('mouseup', function() {
    adressDetails.classList.remove('hide');
  });
})();
