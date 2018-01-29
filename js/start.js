'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var CHART_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
// заголовок в облаке до гистограммы
var HEADER = CLOUD_Y + GAP + (FONT_GAP + GAP) * 2 + GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + GAP + FONT_GAP);

  var maxTime = Math.floor(getMaxElement(times));
  ctx.textAlign = 'left';

  for (var i = 0; i < names.length; i++) {
    var columnHeight = (Math.floor(times[i]) * CHART_HEIGHT / maxTime);
    var columnX = CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i;
    var columnY = HEADER + CHART_HEIGHT - columnHeight;

    // выводит время игрока
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), columnX, columnY - FONT_GAP - 5);

    // рисует колонку гистограммы
    // прозрачность от 0,3 до 0,9
    var opacity = (Math.floor(Math.random() * 7) + 3) / 10;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 225,' + opacity + ')';
    }
    ctx.fillRect(columnX, columnY, COLUMN_WIDTH, columnHeight);

    // выводит имя игрока
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], columnX, HEADER + CHART_HEIGHT + GAP);
  }
};


