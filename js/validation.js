'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');
  // проверка формы, изменение сообщений об ошибке
  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    var setValidityMessage = target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    var setValidityEmptyMessage = target.setCustomValidity('');
    return target.value.length < 2 ? setValidityMessage : setValidityEmptyMessage;
  });
})();
