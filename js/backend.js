'use strict';
(function () {
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';

  function request(metod, url, onSuccess, onError, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000; // 10s

    xhr.addEventListener('load', function () {
      var error;
      switch (xhr.status) {
        case 200:
          onSuccess(xhr.response);
          break;
        case 400:
          error = 'Неверный запрос';
          break;
        case 401:
          error = 'Пользователь не авторизован';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;
        default:
          error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
      }

      if (error) {
        onError(error);
      }
    });

    xhr.open(metod, url);
    xhr.send(data);
  }

  function save(onSuccess, onError, data) {
    request('POST', URL_SAVE, onSuccess, onError, data);
  }

  function load(onSuccess, onError) {
    request('GET', URL_LOAD, onSuccess, onError);
  }

  function errorHandler(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 20 auto; text-align: center; background-color: #4949fa; color: #ffe200; padding: 10px;';
    node.style.position = 'absolute';
    node.style.width = '50%';
    node.style.left = '25%';
    node.style.top = '25px';
    node.style.fontSize = '30px';
    node.style.outline = '4px solid red';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.backend = {
    save: save,
    load: load,
    errorHandler: errorHandler
  };
})();
