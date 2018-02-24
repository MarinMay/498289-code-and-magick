'use strict';
(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarList = document.querySelector('.setup-similar-list');
  var setupSimilar = document.querySelector('.setup-similar');

  // добавляет в элемент содержимое волшебника
  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  // создаем фрагмент и добавляем в него волшебников и показываем их в окне setup
  function addWizardsList(wizardsData) {
    var fragment = document.createDocumentFragment();
    similarList.innerHTML = '';
    var takeNumber = wizardsData.length > window.wizardData.WIZARD_COUNT ? window.wizardData.WIZARD_COUNT : wizardsData.length;
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(wizardsData[i]));
    }

    // добавляем фрагмент в окно
    similarList.appendChild(fragment);

    setupSimilar.classList.remove('hidden');
  }

  window.renderWizards = addWizardsList;
})();
