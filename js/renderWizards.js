'use strict';
(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarList = document.querySelector('.setup-similar-list');
  var setupSimilar = document.querySelector('.setup-similar');

  var artifacts = {
    'balloon': 'Воздушный шарик',
    'wings': 'Крылья',
    'triple_fireballs': 'Тройной фаербол',
    'smaller_fireballs': 'Маленькие фаерболы',
    'bigger_fireballs': 'Увеличенные фаерболы',
    'metal_boots': 'Металлические сапоги',
    'weights': 'Утяжелители на ноги',
    'converse': 'Кеды Конверс',
    'flying_boots': 'Летающие сапоги'
  };

  // добавляет в элемент содержимое волшебника
  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var wizardArtifatcs = wizard.artifacts.map(function (item) {
      return artifacts[item.name];
    }).join(', ');

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.setup-similar-item').setAttribute('data-content', wizardArtifatcs);
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
