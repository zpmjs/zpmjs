(function(global){

  var g_define = global.define;
  var g_zpmjs = global.zpmjs;

  if (!g_zpmjs) {

    var zpmjs_cache = {}; // cache factory.
    var zpmjs_data = {}; // modules.

    var zpmjs_require = function(id){

      if (zpmjs_data[id]) { return zpmjs_data[id]; }

      var factory = zpmjs_cache[id];

      if (!factory) { return; }

      var module = {
        exports: {},
        require: zpmjs_require
      };

      zpmjs_data[id] =
        factory.call(global, zpmjs_require, module.exports, module) ||
        module.exports;

      return zpmjs_data[id];
    };

    var zpm_define = function(id, factory){

      if (zpmjs_require(id)) { return; }

      zpmjs_cache[id] = factory;

      if (typeof g_define === "function" && (g_define.cmd || g_define.amd)){
        g_define(id, [], factory);
      }
    };

    var zpm_use = function(module_ids, callback){
      var mods = [];

      if (!(module_ids instanceof Array)){
        module_ids = [module_ids];
      }

      for(var i=0,l=module_ids.length; i<l; i++){
        mods[i] = zpmjs_require(module_ids[i]);
      }

      callback.apply(global, mods);
    };

    global.zpmjs = {
      use: zpm_use,
      define: zpm_define
    };

  }

})(this);
