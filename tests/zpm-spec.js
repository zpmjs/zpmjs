var expect = require('expect.js');

require('../zpm');

describe('zpm', function() {

  it('normal usage', function() {
    var zpmjs = window.zpmjs;
    expect(typeof zpmjs).to.equal("object");
    expect(typeof zpmjs.require).to.equal("function");
    expect(typeof zpmjs.define).to.equal("function");
  });

  it('zpmjs.define() but not require()', function(done) {

    var zpmjs = window.zpmjs;

    zpmjs.define("module-1", function(require, exports, module){
      expect("execute here.").to.equal("not execute here.");
    });

    expect("execute here.").to.equal("execute here.");
    done();
  });

  it('zpmjs.define() and require(id)', function(done) {

    var zpmjs = window.zpmjs;

    zpmjs.define("module-2", function(require, exports, module){
      expect("execute here.").to.equal("execute here.");
      exports.name = "module-2";
    });

    var M = zpmjs.require("module-2");
    expect(M.name).to.equal("module-2");
    done();
  });

  it('zpmjs.define() and require()', function(done) {

    var zpmjs = window.zpmjs;

    zpmjs.define("module-3", function(require, exports, module){
      expect("execute here.").to.equal("execute here.");
      exports.name = "module-3";
    });

    var M = zpmjs.require("module-3");
    expect(M.name).to.equal("module-3");
    done();
  });

  it('zpmjs.define(), require() but not callback', function(done) {

    var zpmjs = window.zpmjs;
    var executed = false;

    zpmjs.define("module-4", function(require, exports, module){
      expect("execute here.").to.equal("execute here.");
      executed = true;
      exports.name = "module-4";
    });

    zpmjs.require("module-4");
    expect(executed).to.equal(true);
    done()
  });

  it('zpmjs.require()', function(done) {

    var zpmjs = window.zpmjs;

    zpmjs.define("module-5", function(require, exports, module){
      expect("execute here.").to.equal("execute here.");
      exports.name = "module-5";
    });

    var M = zpmjs.require("module-5");
    expect(M.name).to.equal("module-5");
    done();
  });

});
