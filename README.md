# zpmjs [![spm version](http://spmjs.io/badge/zpmjs)](http://spmjs.io/package/zpmjs) [![Build Status](https://travis-ci.org/zpmjs/zpmjs.svg)](https://travis-ci.org/zpmjs/zpmjs) [![Coverage Status](https://coveralls.io/repos/zpmjs/zpmjs/badge.png)](https://coveralls.io/r/zpmjs/zpmjs)

---

A mini module manager.

---

## Install

```
$ spm install zpmjs --save
```

## Build

```
make build
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
