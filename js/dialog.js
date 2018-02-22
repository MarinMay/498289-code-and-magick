'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var dialogHandle = setup.querySelector('input[name="avatar"]');
  var setupTop = '80px';
  var setupLeft = '50%';
  var form = document.querySelector('.setup-wizard-form');

  function onFormSubmit(evt) {
    window.backend.save(closePopup, window.backend.errorHandler, new FormData(form));
    evt.preventDefault();
  }

  // показываем окно setup
  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setup.style.top = setupTop;
    setup.style.left = setupLeft;
  }

  // нажатие клавиши ESC закрывает попап
  function onPopupEscPress(evt) {
    window.util.isEscEvent(evt, closePopup);
  }

  // отменяет клик
  function onClickPreventDefault(evt) {
    evt.preventDefault();
    dialogHandle.removeEventListener('click', onClickPreventDefault);
  }

  function onMouseDown(downEvt) {
    downEvt.preventDefault();
    var startCoords = {
      x: downEvt.clientX,
      y: downEvt.clientY
    };
    var dragged = false;

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      if (shift.x || shift.y) {
        dragged = true;
      }

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (dragged) {
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  // скрывает окно по нажатию крестика
  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  dialogHandle.addEventListener('mousedown', onMouseDown);

  form.addEventListener('submit', onFormSubmit);
})();
