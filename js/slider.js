(function() {
  var body = document.body;
  var sliderControl = body.querySelector('.slider-control');
  var sliderBtn = sliderControl.querySelectorAll('button');
  var sliders = body.querySelectorAll('.main-slide');

  sliderControl.addEventListener('click', function(evt) {
    var target = evt.target;
    var btnNum = target.dataset.sliderBtn;

    if(!btnNum) return;

    var imgSrc = 'url(img/slide' + (+btnNum + 1) + '.png)'

    for(var i = 0; i < sliderBtn.length; i++) {
      var button = sliderBtn[i];

      if(button.dataset.sliderBtn == btnNum) {
        button.parentNode.classList.add('slide-show');
      } else {
        button.parentNode.classList.remove('slide-show');
      }
    }

    for(var i = 0; i < sliders.length; i++) {
      if(i == btnNum) {
        sliders[i].classList.add('show');
      } else {
        sliders[i].classList.remove('show');
      }
    }

    if(btnNum == 0) {
      body.style.backgroundColor = '';
      body.style.backgroundImage = imgSrc;
    }
    if(btnNum == 1) {
      body.style.backgroundColor = '#8996a6';
      body.style.backgroundImage = imgSrc;
    }
    if(btnNum == 2) {
      body.style.backgroundColor = '#ab9891';
      body.style.backgroundImage = imgSrc;
    }
  });

  /*Предзагрузка фотографий*/

  for (var i = 1; i <= 3; i++) {
    var img = document.createElement('img');
    img.src = 'img/slide' + i + '.png'
    img.style.position = 'absolute';
    img.style.top = '-1000px';
    img.style.left = '-800px';
    body.appendChild(img);
  }
})();
