# zpm [![spm version](http://spmjs.io/badge/zpm)](http://spmjs.io/package/zpm)

---

A mini module manager.

---

## Install

```
$ spm install zpm --save
```

## Usage

```html
<script src="path/to/zpm.js"></script>
<script src="path/to/a.js"></script>
<script src="path/to/b.js"></script>
<script src="path/to/c.js"></script>

<script>
zpmjs.use(["path/to/a", "path/to/b", "path/to/c"], function(A, B, C){
});
</script>
```
