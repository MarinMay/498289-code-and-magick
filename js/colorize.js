'use strict';
(function () {
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

  window.colorize = changesColorElementOnClick;

})();
