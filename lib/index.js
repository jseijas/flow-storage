'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoopbackCollection = exports.FlowStorage = exports.JsonCollection = exports.MemoryCollection = exports.BaseCollection = undefined;

var _baseCollection = require('./base-collection');

var _baseCollection2 = _interopRequireDefault(_baseCollection);

var _memoryCollection = require('./memory-collection');

var _memoryCollection2 = _interopRequireDefault(_memoryCollection);

var _jsonCollection = require('./json-collection');

var _jsonCollection2 = _interopRequireDefault(_jsonCollection);

var _flowStorage = require('./flow-storage');

var _flowStorage2 = _interopRequireDefault(_flowStorage);

var _loopbackCollection = require('./loopback-collection');

var _loopbackCollection2 = _interopRequireDefault(_loopbackCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BaseCollection = _baseCollection2.default;
exports.MemoryCollection = _memoryCollection2.default;
exports.JsonCollection = _jsonCollection2.default;
exports.FlowStorage = _flowStorage2.default;
exports.LoopbackCollection = _loopbackCollection2.default;