
zpmjs.define("a", function(require, exports, module){

  exports.a = "a";

});

zpmjs.define("b", function(require, exports, module){

  module.exports = function(){
    return "b";
  };

});

zpmjs.define("c", function(require, exports, module){

  module.exports = {
    c: "c"
  };

});

zpmjs.define("d", function(require, exports, module){

  module.exports = "d";

});

zpmjs.define("return-exports", function(require, exports, module){

  return "return-exports";

});

zpmjs.define("return-and-exports", function(require, exports, module){

  return "return-and-exports";

});

zpmjs.define("no-exports", function(require, exports, module){

});


zpmjs.define("father", function(require, exports, module){
  exports.name = "Super Man";
});

zpmjs.define("child", function(require, exports, module){
  var father = require("father");
  exports.child = "child's father is " + father.name;
});
