(function(global){

  var g_define = global.define;
  var g_zpmjs = global.zpmjs;

  g_zpmjs || function(){

    var zpmjs_factory_cache = {};
    var zpmjs_exports_cache = {};

    var zpmjs_require = function(id){

      if (zpmjs_exports_cache[id]) { return zpmjs_exports_cache[id]; }

      var factory = zpmjs_factory_cache[id];

      if (!factory) { return; }

      var module = {
        id: id
      };

      zpmjs_exports_cache[id] =
        factory.call(global, zpmjs_require, module.exports = {}, module) ||
        module.exports;

      delete zpmjs_factory_cache[id];

      return zpmjs_exports_cache[id];
    };

    var zpm_define = function(id, factory){

      if (zpmjs_require(id)) { return; }

      zpmjs_factory_cache[id] = factory;

      if (typeof g_define === "function" && (g_define.cmd || g_define.amd)){
        g_define(id, [], factory);
      }
    };

    global.zpmjs = {
      use: function(module_ids, callback){
        var mods = [];

        if (!(module_ids instanceof Array)){
          module_ids = [module_ids];
        }

        for(var i=0,l=module_ids.length; i<l; i++){
          mods[i] = zpmjs_require(module_ids[i]);
        }

        callback.apply(global, mods);
      },
      require: zpmjs_require,
      define: zpm_define
    };

  }();

})(this);
