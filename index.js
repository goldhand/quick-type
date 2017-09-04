/**
 * @module {Function} quick-type
 */

var STRING = 'string';
var NUMBER = 'number';
var BOOLEAN = 'boolean';
var SYMBOL = 'symbol';
var NULL = 'null';
var UNDEFINED = 'undefined';
var OBJECT = 'object';
var FUNCTION = 'function';
var ARRAY = 'array';

var dataTypes = {
  string: STRING,
  number: NUMBER,
  boolean: BOOLEAN,
  symbol: SYMBOL,
  null: NULL,
  undefined: UNDEFINED,
  object: OBJECT,
  array: ARRAY,
  function: FUNCTION,
};

function typeOf(prop) {

  if (Array.isArray(prop)) return ARRAY;  // typeof [] === 'object'
  if (prop === null) return NULL;  // typeof null === 'object'

  // typeof will work with any other type
  return dataTypes[typeof prop];  // 'string' | 'number' | 'boolean' | 'object' | 'function' | 'undefined' | 'symbol'
};

typeOf.types = dataTypes;

typeOf.isString = function(prop) {
  return typeOf(prop) === dataTypes.string;
}
typeOf.isNumber = function(prop) {
  return typeOf(prop) === dataTypes.number;
}
typeOf.isBoolean = function(prop) {
  return typeOf(prop) === dataTypes.boolean;
}
typeOf.isSymbol = function(prop) {
  return typeOf(prop) === dataTypes.symbol;
}
typeOf.isNull = function(prop) {
  return typeOf(prop) === dataTypes.null;
}
typeOf.isUndefined = function(prop) {
  return typeOf(prop) === dataTypes.undefined;
}
typeOf.isObject = function(prop) {
  return typeOf(prop) === dataTypes.object;
}
typeOf.isArray = function(prop) {
  return typeOf(prop) === dataTypes.array;
}
typeOf.isFunction = function(prop) {
  return typeOf(prop) === dataTypes.function;
}

module.exports = typeOf;
