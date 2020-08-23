"use strict";

var _api = _interopRequireDefault(require("./api.js"));

var _character = _interopRequireDefault(require("./character.js "));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = new _api["default"]();

function initApp(initCharacterId) {
  var characterData, rick;
  return regeneratorRuntime.async(function initApp$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(api.getcharacter(initCharacterId));

        case 2:
          characterData = _context.sent;
          console.log(characterData);
          rick = new _character["default"](characterData);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

window.onload = function () {
  var cont = 1;

  document.getElementById("btn-next").onclick = function () {
    cont++;
    initApp(cont);
  };
};

window.addEventListener('load', function () {
  initApp(1);
});