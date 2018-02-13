'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  // выбирает случайный пункт из массива
  function getElem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function isEscEvent(evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  }
  function isEnterEvent(evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  }

  window.util = {
    getRandomElemArray: getElem,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent
  };
})();
