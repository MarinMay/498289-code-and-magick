'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEye = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var coatColorInput = setup.querySelector('[name=coat-color]');
  var eyesColorInput = setup.querySelector('[name=eyes-color]');
  var fireballColorInput = setup.querySelector('[name=fireball-color]');

  window.colorize(wizardEye, window.wizardData.EYES_COLORS, eyesColorInput);
  window.colorize(wizardCoat, window.wizardData.COAT_COLORS, coatColorInput);
  window.colorize(wizardFireball, window.wizardData.FIREBALL_COLORS, fireballColorInput);
})();

