'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @param {Object} options
 *        {string} options.elementSym = '__'
 *        {string} options.modificationSym = '--'
 *        {string} options.baseClass = ''
 */
var Classes = function () {
  function Classes(options) {
    _classCallCheck(this, Classes);

    options = _extends({
      elementSym: '__',
      modificationSym: '--',
      baseClass: ''
    }, options);

    this.baseClass = options.baseClass;
    this.elementSym = options.elementSym;
    this.modificationSym = options.modificationSym;
    this.classesArr = [];
  }

  /**
   *
   * @param {Array|Object|String} options
   *        options.m {Array|Object|String|null}
   * @returns {{className: string}}
   */


  _createClass(Classes, [{
    key: 'result',
    value: function result() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (options === undefined) {
        return { className: this.baseClass };
      }

      var isElement = Object.keys(options)[0] !== 'm';
      var isString = typeof options === "string";
      var isArray = options.length === undefined;

      this.classesArr = [];

      if (isArray) {
        options = [options];
      }

      if (isString) {
        options = [_defineProperty({}, options, true)];
      }

      options.forEach(function (item) {
        var keys = Object.keys(item);
        var element = keys[0];
        var modifiers = item.m;

        if (isElement) {
          if (!item[element]) {
            return;
          }

          _this.classesArr.push(element);

          var _resultingModifiers = _this.solveModifiers(modifiers, element);

          if (_resultingModifiers.length) {
            var _classesArr;

            (_classesArr = _this.classesArr).push.apply(_classesArr, _toConsumableArray(_resultingModifiers));
          }

          _this.classesArr = _this.classesArr.map(function (item) {
            return [_this.baseClass, item].join(_this.elementSym);
          });

          return;
        }

        if (!_this.classesArr.includes(_this.baseClass)) {
          _this.classesArr.push(_this.baseClass);
        }

        var resultingModifiers = _this.solveModifiers(modifiers, _this.baseClass);

        if (resultingModifiers.length) {
          var _classesArr2;

          (_classesArr2 = _this.classesArr).push.apply(_classesArr2, _toConsumableArray(resultingModifiers));
        }
      });

      return { className: this.classesArr.join(' ').trim() };
    }
  }, {
    key: 'solveModifiers',
    value: function solveModifiers(modifiers, element) {
      var _this2 = this;

      var classesArr = [];

      if (modifiers) {
        var _classesArr3;

        if (modifiers.length === undefined) {
          Object.keys(modifiers).map(function (inner) {
            return modifiers[inner] ? classesArr.push([element, inner].join(_this2.modificationSym)) : null;
          });

          return classesArr;
        }

        if (typeof modifiers === "string") {
          modifiers = [modifiers];
        }

        (_classesArr3 = this.classesArr).push.apply(_classesArr3, _toConsumableArray(modifiers.map(function (item) {
          return [element, item].join(_this2.modificationSym);
        })));
      }

      return classesArr;
    }
  }], [{
    key: 'getClassesList',
    value: function getClassesList(list) {
      var classesArr = [];

      if (Array.isArray(list)) return list.join(' ');

      for (var key in list) {
        if (list[key]) classesArr.push(key);
      }

      return classesArr.join(' ');
    }
  }, {
    key: 'resultList',
    value: function resultList(list) {
      return { className: Classes.getClassesList(list) };
    }
  }]);

  return Classes;
}();

exports.default = Classes;
var cls = exports.cls = new Classes();