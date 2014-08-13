# Demo

---

## Normal usage

````html
<script src='../zpm.js?nowrap'></script>
<script>
seajs.use(['./a.js?nowrap'], function() {
  console.log("seajs:", seajs.require("a"))

  zpmjs.use("a", function(A){
    console.log(A)
  });

  zpmjs.use(["a", "b", "c", "d",
    "return-exports", "return-and-exports", "no-exports"], function(A, B, C, D, R, RaE, N){
    console.log(A);
    console.log(B);
    console.log(C);
    console.log(D);
    console.log("return exports:", R);
    console.log("return and exports:", RaE);
    console.log("no epxorts:", N);
  });

  zpmjs.use(["child"], function(child){
    console.log("child:", child);
  });
});

seajs.use(["./all-in-one.js?nowrap"], function(All){
  console.log("all-in-one: seajs:", All);
});
</script>
````
