(function() {
  var popup = document.body.querySelector('.modal-contact-us');
  var popupBtn = document.body.querySelector('.shop-adress-details .button');
  var closeBtn = document.body.querySelector('.modal-contact-us .close-button');
  var overlay;

  popupBtn.addEventListener('click', function() {
    overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    popup.classList.add('open');
  });

  closeBtn.addEventListener('click', function() {
    overlay.parentNode.removeChild(overlay);
    popup.classList.remove('open');
  });

  document.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
      overlay.parentNode.removeChild(overlay);
      popup.classList.remove('open');
    }
  });

  document.addEventListener('click', function(evt) {
    var target = evt.target;

    if(target.classList.contains('overlay')) {
      popup.classList.remove('open');
      overlay.parentNode.removeChild(overlay);
    }
  });
})();
