(function(global){

  var g_define = global.define;
  var g_zpmjs = global.zpmjs;

  if (!g_zpmjs) {

    var zpmjs_cache = {};

    var zpmjs_require = function(id){
      return zpmjs_cache[id];
    };

    var zpm_define = function(id, factory){

      var module = {
        exports: {},
        require: zpmjs_require
      };

      if (zpmjs_require(id)) { return; }

      zpmjs_cache[id] =
          factory.call(global, zpmjs_require, module.exports, module) ||
          module.exports;

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
