function initMap() {
  var elem = document.querySelector('#google-map');

    var options = {
    zoom: 17,
    center: { lat: 59.938755, lng: 30.326361},
  };

  var map = new google.maps.Map(elem, options);

  var marker = new google.maps.Marker({
    position: { lat: 59.938526, lng: 30.322883},
    map: map,
    icon: 'img/pin.png',
  });
}

(function() {
  var adressDetails = document.querySelector('.shop-adress-details');
  var map = document.querySelector('.map-wrapper');

  map.addEventListener('mousedown', function(evt) {
    var target = evt.target;

    while(target != this) {
      if(target.classList.contains('shop-adress-details')) return;
      target = target.parentNode;
    }

    adressDetails.classList.add('hide');
  });

  map.addEventListener('mouseup', function(evt) {
    adressDetails.classList.remove('hide');
  });
})();
