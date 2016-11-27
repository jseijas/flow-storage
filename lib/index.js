'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsonCollection = exports.MemoryCollection = exports.BaseCollection = undefined;

var _baseCollection = require('./base-collection');

var _baseCollection2 = _interopRequireDefault(_baseCollection);

var _memoryCollection = require('./memory-collection');

var _memoryCollection2 = _interopRequireDefault(_memoryCollection);

var _jsonCollection = require('./json-collection');

var _jsonCollection2 = _interopRequireDefault(_jsonCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BaseCollection = _baseCollection2.default;
exports.MemoryCollection = _memoryCollection2.default;
exports.JsonCollection = _jsonCollection2.default;