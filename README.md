# fetch

<sup>**Social Media Photo by [Anthony Duran](https://unsplash.com/@dogflirt) on [Unsplash](https://unsplash.com/)**</sup>

[![build](https://github.com/WebReflection/fetch/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/fetch/actions/workflows/node.js.yml) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/fetch/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/fetch?branch=main)

A fetch with Response abilities.

<sup>(... see what I did there?)</sup>

```js
import fetch from '@webreflection/fetch';

// await directly Response methods or accessors
console.log(await fetch('https://google.com').text());
console.log(await fetch('https://google.com').ok);

// all other Promise methods just work
console.log(await fetch('https://google.com').then(r => r.ok));
```

The export is simply a Proxy that forwards to the Response any explicit intent, meaning:

  * a `fetch(url, ...init)` returns exactly a `fetch(url, ...init)` reference
    * you can do everything you could do already with `fetch` ... **this is fetch** indeed!
    * you can use this module as drop-in replacement in your current code though
    * you can eventually incrementally use its features *if* and/or *when* needed
  * if any `Response.prototype` known *key* is directly accessed, such property or method is forwarded directly to the *response* once the *fetch* is resolved
  * as the goal is to shortcut the *response* boilerplate, `Response.prototype` keys prevail over `Promise.prototype` so if your argument is that `Symbol.toStringTag` returned the response one, I am afraid that's meant by design so that unless *Promise* API introduces a conflicting entry name with *Response* API, this module actually requires zero maintainability and it's future-friendly with API changes and whatnot
  * if you want to deal with `status` or `ok` or `headers` you still can do that:
    * reference `const req = fetch(url, ...init)`
    * use `try/catch` around `req.json()` or `req.text()` or any other forwarded method
    * use `const { status, headers } = await req` or `const status = await req.status` or any other way you like to introspect the failure

```js
// alternatively ...
const { ok, text } = await fetch(URL);
if (ok) console.log(await text());
```

If none of this is interesting to you though, we're good! You can move on happily ever after 👋
