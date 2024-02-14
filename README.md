# fetch

<sup>**Social Media Photo by [Anthony Duran](https://unsplash.com/@dogflirt) on [Unsplash](https://unsplash.com/)**</sup>

[![build](https://github.com/WebReflection/fetch/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/fetch/actions/workflows/node.js.yml)

A fetch with Response abilities.

```js
import fetch from '@webreflection/fetch';

// await directly Response methods or accessors
console.log(await fetch('https://google.com').text());
console.log(await fetch('https://google.com').ok);

// all other Promise methods just work
console.log(await fetch('https://google.com').then(r => r.ok));
```

The export is simply a Proxy that forwards to the Response any explicit intent.
