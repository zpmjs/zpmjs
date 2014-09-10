var expect = require('expect.js');

require('../zpm');

describe('zpm', function() {

  it('normal usage', function() {
    var zpmjs = window.zpmjs;
    expect(typeof zpmjs).to.equal("object");
    expect(typeof zpmjs.use).to.equal("function");
    expect(typeof zpmjs.require).to.equal("function");
    expect(typeof zpmjs.define).to.equal("function");
  });

  it('zpmjs.define() but not use()', function(done) {

    var zpmjs = window.zpmjs;

    zpmjs.define("module-1", function(require, exports, module){
      expect("execute here.").to.equal("not execute here.");
    });

    expect("execute here.").to.equal("execute here.");
    done();
  });

  it('zpmjs.define() and use(id)', function(done) {

    var zpmjs = window.zpmjs;

    zpmjs.define("module-2", function(require, exports, module){
      expect("execute here.").to.equal("execute here.");
      exports.name = "module-2";
    });

    zpmjs.use("module-2", function(M){
      expect(M.name).to.equal("module-2");
      done();
    });
  });

  it('zpmjs.define() and use()', function(done) {

    var zpmjs = window.zpmjs;

    zpmjs.define("module-3", function(require, exports, module){
      expect("execute here.").to.equal("execute here.");
      exports.name = "module-3";
    });

    zpmjs.use(["module-3"], function(M){
      expect(M.name).to.equal("module-3");
      done();
    });
  });

  it('zpmjs.define(), use() but not callback', function(done) {

    var zpmjs = window.zpmjs;

    zpmjs.define("module-4", function(require, exports, module){
      expect("execute here.").to.equal("execute here.");
      exports.name = "module-4";
    });

    zpmjs.use(["module-4"]);
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
