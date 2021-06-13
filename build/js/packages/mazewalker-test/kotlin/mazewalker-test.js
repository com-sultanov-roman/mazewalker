(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'mazewalker-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mazewalker-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'mazewalker-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'mazewalker-test'.");
    }root['mazewalker-test'] = factory(typeof this['mazewalker-test'] === 'undefined' ? {} : this['mazewalker-test'], kotlin, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$kotlin_test) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function TestClient() {
  }
  TestClient.prototype.testSayHello = function () {
  };
  TestClient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestClient',
    interfaces: []
  };
  _.TestClient = TestClient;
  suite('', false, function () {
    suite('TestClient', false, function () {
      test('testSayHello', false, function () {
        return (new TestClient()).testSayHello();
      });
    });
  });
  Kotlin.defineModule('mazewalker-test', _);
  return _;
}));

//# sourceMappingURL=mazewalker-test.js.map
