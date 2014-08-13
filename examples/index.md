# Demo

---

## Normal usage

````html
<script src='../zpm.js?nowrap'></script>
<script>
seajs.use(['./a.js?nowrap'], function() {

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
</script>
````
