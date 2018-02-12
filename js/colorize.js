'use strict';
(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'];

  var setup = document.querySelector('.setup');

  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEye = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var coatColorInput = setup.querySelector('[name=coat-color]');
  var eyesColorInput = setup.querySelector('[name=eyes-color]');
  var fireballColorInput = setup.querySelector('[name=fireball-color]');

  function changesColorElementOnClick(wizardElement, colorArray, input) {
    var count = 1;
    wizardElement.addEventListener('click', function () {
      input.value = colorArray[count];
      if (wizardElement.tagName === 'DIV') {
        wizardElement.style.backgroundColor = colorArray[count++];
      } else {
        wizardElement.style.fill = colorArray[count++];
      }
      if (count >= colorArray.length) {
        count = 0;
      }
    });
  }

  changesColorElementOnClick(wizardEye, EYES_COLORS, eyesColorInput);
  changesColorElementOnClick(wizardCoat, COAT_COLORS, coatColorInput);
  changesColorElementOnClick(wizardFireball, FIREBALL_COLORS, fireballColorInput);
})();
