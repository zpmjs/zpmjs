# Demo

---

## Normal usage

````html
<script src='../zpm.js?nowrap'></script>
<script src='./a.js?nowrap'></script>
<script>
  console.log("seajs:", seajs.require("a"))

  // I
  var A = zpmjs.require("a");
  console.log(A)

  // II
  var A = zpmjs.require("a");
  var B = zpmjs.require("b");
  var C = zpmjs.require("c");
  var D = zpmjs.require("d");
  var R = zpmjs.require("return-exports");
  var RaE = zpmjs.require("return-and-exports");
  var N = zpmjs.require("no-exports");

  console.log(A);
  console.log(B);
  console.log(C);
  console.log(D);
  console.log("return exports:", R);
  console.log("return and exports:", RaE);
  console.log("no epxorts:", N);

  // III
  var child =
  zpmjs.require("child");
  console.log("child:", child);

</script>
````
