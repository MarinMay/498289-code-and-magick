'use strict';
(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var fileChooserAvatar = document.querySelector('.upload input[type=file]');
  var avatarPreview = document.querySelector('.setup-user-pic');
  var avatarDropZone = document.querySelector('.drop-zone');
  var setupOpenImage = document.querySelector('.setup-open img');

  // проверка формата файлов
  function mutchesNameFiles(name) {
    return FILE_TYPES.some(function (it) {
      return name.endsWith(it);
    });
  }

  function onAvatarChange() {
    var file = fileChooserAvatar.files[0];
    uploadAvatar(file);
  }

  function uploadAvatar(file) {
    var fileName = file.name.toLowerCase();
    var matches = mutchesNameFiles(fileName);

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        avatarPreview.src = reader.result;
        setupOpenImage.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  }

  function dragEnter(evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }

  function dragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }

  function dropAvatar(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files;
    uploadAvatar(files[0]);
  }

  avatarDropZone.addEventListener('dragenter', dragEnter);
  avatarDropZone.addEventListener('dragover', dragOver);
  avatarDropZone.addEventListener('drop', dropAvatar);

  fileChooserAvatar.addEventListener('change', onAvatarChange);
})();
