"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Character =
/*#__PURE__*/
function () {
  function Character(_ref) {
    var name = _ref.name,
        image = _ref.image,
        status = _ref.status,
        species = _ref.species,
        location = _ref.location;

    _classCallCheck(this, Character);

    this.name = name;
    this.image = image;
    this.status = status;
    this.species = species;
    this.location = location;
    this.$containerImg = document.querySelector('#container-img');
    this.$containerData = document.querySelector('#container-data');
    this.render();
  }

  _createClass(Character, [{
    key: "buildImg",
    value: function buildImg() {
      return "\n        <img class=\"character-img\" src=\"".concat(this.image, "\" alt=\"character\">\n        <img class=\"character-portal\" src=\"src/img/portal.gif\" alt=\"portal\">\n        ");
    }
  }, {
    key: "buildData",
    value: function buildData() {
      return "\n        <div class=\"data-name\">\n        <h3>Name</h3>\n        <h2>".concat(this.name, "</h2>\n    </div>\n    <div class=\"data-labels\">\n        <h3 class=\"label-about\">About</h3>\n        <div class=\"labels\">\n            <h3>Especie: ").concat(this.species, "</h3>\n            <h3>Estado: ").concat(this.status, "</h3>\n            <h3>Localizacion: ").concat(this.location.name, "</h3>\n        </div>\n    </div>\n        ");
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.$characterContainer);
      this.$containerImg.innerHTML = this.buildImg();
      this.$containerData.innerHTML = this.buildData();
    }
  }]);

  return Character;
}();

exports["default"] = Character;