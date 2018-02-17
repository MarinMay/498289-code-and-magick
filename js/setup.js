'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEye = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var coatColorInput = setup.querySelector('[name=coat-color]');
  var eyesColorInput = setup.querySelector('[name=eyes-color]');
  var fireballColorInput = setup.querySelector('[name=fireball-color]');
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var artifactsElement = document.querySelector('.setup-artifacts');

  function isTargetTagName(evt, tag) {
    return evt.target.tagName.toLowerCase() === tag;
  }

  function isTargetWithoutChild(evt) {
    return evt.target.childNodes.length === 0;
  }

  function dragStart(evt, item) {
    if (isTargetTagName(evt, 'img')) {
      draggedItem = item;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  }

  function onShopDragstart(evt) {
    dragStart(evt, evt.target.cloneNode());
  }

  function onArtifactDragstart(evt) {
    dragStart(evt, evt.target);
  }

  function onArtifactDragover(evt) {
    evt.preventDefault();
    return false;
  }

  function onArtifactDragenter(evt) {
    if (isTargetTagName(evt, 'div') && isTargetWithoutChild(evt)) {
      evt.target.style.backgroundColor = 'yellow';
    }
    artifactsElement.style.outline = '2px dashed red';
    evt.preventDefault();
  }

  function onArtifactDragleave(evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  }

  function onArtifactDrop(evt) {
    if (isTargetTagName(evt, 'div')) {
      evt.target.style.backgroundColor = '';
      if (isTargetWithoutChild(evt)) {
        evt.target.appendChild(draggedItem);
      }
      evt.preventDefault();
      artifactsElement.style.outline = '';
    }
  }

  function onSetupDragend(evt) {
    artifactsElement.style.outline = '';
    evt.preventDefault();
  }

  shopElement.addEventListener('dragstart', onShopDragstart);

  artifactsElement.addEventListener('dragstart', onArtifactDragstart);

  artifactsElement.addEventListener('dragover', onArtifactDragover);

  artifactsElement.addEventListener('dragenter', onArtifactDragenter);

  artifactsElement.addEventListener('dragleave', onArtifactDragleave);

  artifactsElement.addEventListener('drop', onArtifactDrop);

  setup.addEventListener('dragend', onSetupDragend);

  window.colorize(wizardEye, window.wizardData.EYES_COLORS, eyesColorInput);
  window.colorize(wizardCoat, window.wizardData.COAT_COLORS, coatColorInput);
  window.colorize(wizardFireball, window.wizardData.FIREBALL_COLORS, fireballColorInput);
})();

