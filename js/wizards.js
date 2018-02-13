'use strict';
(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarList = document.querySelector('.setup-similar-list');
  var setupSimilar = document.querySelector('.setup-similar');

  // конструктор волшебника
  function Wizard(names, surnames, coatColors, eyesColors) {
    this.name = window.util.getRandomElemArray(names) + ' ' + window.util.getRandomElemArray(surnames);
    this.coatColor = window.util.getRandomElemArray(coatColors);
    this.eyesColor = window.util.getRandomElemArray(eyesColors);
  }

  // создает массив волшебников заданной длинны
  function createdWizards(num) {
    for (var i = 0; i < num; i++) {
      wizards[i] = new Wizard(window.wizardData.NAMES, window.wizardData.SURNAMES, window.wizardData.COAT_COLORS, window.wizardData.EYES_COLORS);
    }
  }

  // добавляет в элемент содержимое волшебника
  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  // создаем массив волшебников
  var wizards = [];
  createdWizards(window.wizardData.WIZARD_COUNT);

  // создаем фрагмент и добавляем в него волшебников и показываем их в окне setup
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  // добавляем фрагмент в окно
  similarList.appendChild(window.wizards);

  setupSimilar.classList.remove('hidden');
})();
