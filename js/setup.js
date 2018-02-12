'use strict';

(function () {
  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'];

  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'];

  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'];

  var WIZARD_COUNT = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarList = document.querySelector('.setup-similar-list');
  var setupSimilar = document.querySelector('.setup-similar');


  // конструктор волшебника
  function Wizard(names, surnames, coatColors, eyesColors) {
    this.name = getElem(names) + ' ' + getElem(surnames);
    this.coatColor = getElem(coatColors);
    this.eyesColor = getElem(eyesColors);
  }

  // выбирает случайный пункт из массива
  function getElem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // создает массив волшебников заданной длинны
  function createdWizards(num) {
    for (var i = 0; i < num; i++) {
      wizards[i] = new Wizard(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS);
    }
  }

  // добавляет в элемент содержимое волшебника, которое меняется
  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  // создаем массив волшебников
  var wizards = [];
  createdWizards(WIZARD_COUNT);

  // создаем фрагмент и добавляем в него волшебников и показываем их в окне setup
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  // добавляем фрагмент в окно
  similarList.appendChild(fragment);

  setupSimilar.classList.remove('hidden');
})();
