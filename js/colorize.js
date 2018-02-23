'use strict';
(function () {
  function changesColorElementOnClick(wizardElement, colorArray, input) {
    var count = 1;

    wizardElement.addEventListener('click', function () {
      input.value = colorArray[count];

      if (wizardElement.tagName === 'DIV') {
        wizardElement.style.backgroundColor = colorArray[count++];
      } else {
        var color = colorArray[count];
        wizardElement.style.fill = colorArray[count++];
        // вызываем сортировку волшебников
        var isElementCoat = wizardElement.classList.contains('wizard-coat');
        var onElementChange = isElementCoat ? window.similar.onCoatChange : window.similar.onEyesChange;
        onElementChange(color);
      }
      if (count >= colorArray.length) {
        count = 0;
      }
    });
  }

  window.colorize = changesColorElementOnClick;

})();
