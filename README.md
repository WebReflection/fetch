# fetch

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
