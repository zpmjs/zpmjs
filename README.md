# zpm [![spm version](http://spmjs.io/badge/zpm)](http://spmjs.io/package/zpm) [![Build Status](https://travis-ci.org/zpmjs/zpm.js.svg)](https://travis-ci.org/zpmjs/zpm.js) [![Coverage Status](https://coveralls.io/repos/zpmjs/zpm.js/badge.png)](https://coveralls.io/r/zpmjs/zpm.js)

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

## API

### zpmjs.define(String id, Array dependencies, Function factory)


### zpmjs.use(String ids, Function callback)


### zpmjs.use(Array ids, Function callback)
