(function() {
  var rangeControl = document.querySelector('.price-range');
  var scale = rangeControl.querySelector('.scale');
  var bar = scale.querySelector('.bar');
  var toggleMin = scale.querySelector('.toggle-min');
  var toggleMax = scale.querySelector('.toggle-max');
  var minValue = document.querySelector('#min-price');
  var maxValue = document.querySelector('#max-price');

  toggleMin.onmousedown = function(evt) {
    var toggleMinCoords = getCoords(toggleMin);
    var shiftX = evt.pageX - toggleMinCoords.left;

    var scaleCoords = getCoords(scale);
    var toggleMaxCoords = getCoords(toggleMax);

    function moveAt(evt) {
      var newLeft = evt.pageX - scaleCoords.left - shiftX;
      if(newLeft < 0) {
        newLeft = 0;
      }
      if(newLeft > (toggleMaxCoords.left - scaleCoords.left - toggleMin.offsetWidth)) {
        newLeft = toggleMaxCoords.left - scaleCoords.left - toggleMin.offsetWidth;
      }

      bar.style.marginLeft = newLeft + 'px';
      bar.style.width = getCoords(toggleMax).left - getCoords(toggleMin).left + 10 + 'px';

      minValue.value = calcPrice(newLeft) + ' руб. – ';

      toggleMin.style.left = newLeft + 'px';
    }

    document.onmousemove = function(evt) {
      moveAt(evt);
    }

    document.onmouseup = function(evt) {
      document.onmouseup = document.onmousemove = null;
    }

    return false;
  }

  toggleMax.onmousedown = function(evt) {
    var toggleMaxCoords = getCoords(toggleMax);
    var shiftX = evt.pageX - toggleMaxCoords.left;

    var scaleCoords = getCoords(scale);
    var toggleMinCoords = getCoords(toggleMin);

    function moveAt(evt) {
      var newLeft = evt.pageX - scaleCoords.left - shiftX;
      if(newLeft > (scale.offsetWidth - toggleMax.offsetWidth)) {
        newLeft = scale.offsetWidth - toggleMax.offsetWidth;
      }
      if(newLeft < toggleMinCoords.left - scaleCoords.left + toggleMin.offsetWidth) {
        newLeft = toggleMinCoords.left - scaleCoords.left + toggleMin.offsetWidth;
      }

      bar.style.width = getCoords(toggleMax).left - getCoords(toggleMin).left + 4 + 'px';

      maxValue.value = calcPrice(newLeft - 20) + 'руб.';

      toggleMax.style.left = newLeft + 'px';
    }

    document.onmousemove = function(evt) {
      moveAt(evt);
    }

    document.onmouseup = function(evt) {
      document.onmouseup = document.onmousemove = null;
    }

    return false;
  }

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + document.documentElement.scrollTop,
      left: box.left + document.documentElement.scrollLeft,
    }
  }

  function calcPrice(n) {
    var step = 800 / 136;
    var res = 100 + Math.round(step * n);
    return res;
  }
})();
