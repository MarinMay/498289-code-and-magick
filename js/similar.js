'use strict';
(function () {
  var wizards = [];
  var coatColor = document.querySelector('.wizard-coat').style.fill;
  var eyesColor = document.querySelector('.wizard-eyes').style.fill;

  function addWizardArtifactList() {
    var similarList = document.querySelector('.setup-similar-list');
    similarList.addEventListener('mouseover', function (evt) {
      var similarItem = evt.target.closest('.setup-similar-item');
      if (similarItem) {
        similarItem.classList.add('setup-similar-item--before');
      }
    });
    similarList.addEventListener('mouseout', function (evt) {
      var similarItem = evt.target.closest('.setup-similar-item');
      if (similarItem) {
        similarItem.classList.remove('setup-similar-item--before');
      }
    });
  }

  // присваивает волшебнику степень похожести
  function getRank(wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  }

  // сортировка по имени по алфавиту
  function namesComparator(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }

  // устанавливает порядок сортировки массива
  function sortsWizards(a, b) {
    var rankDiff = getRank(b) - getRank(a);
    if (rankDiff === 0) {
      rankDiff = namesComparator(a.name, b.name);
    }
    return rankDiff;
  }

  // сортирует массив по степени похожести по убыванию
  function getSortedWizards(wizardArray) {
    wizardArray.sort(sortsWizards);
    return wizardArray;
  }

  // добавляет волшебников на страницу после сортировок
  function updateWizards() {
    window.renderWizards(getSortedWizards(wizards));
  }

  function onEyesChange(color) {
    eyesColor = color;
    window.util.debounce(updateWizards);
  }

  function onCoatChange(color) {
    coatColor = color;
    window.util.debounce(updateWizards);
  }

  function onSuccessLoad(data) {
    wizards = data;
    updateWizards();
    var wizardLabel = document.querySelector('.setup-similar-label');
    addWizardArtifactList(wizardLabel);
  }

  window.backend.load(onSuccessLoad, window.backend.onErrorRequest);

  window.similar = {
    onEyesChange: onEyesChange,
    onCoatChange: onCoatChange
  };
})();
