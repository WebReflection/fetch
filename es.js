const e=Object.getOwnPropertyDescriptors(Response.prototype),t=e=>"function"==typeof e,o={get:(o,n)=>e.hasOwnProperty(n)?((e,o,{get:n,value:p})=>n||!t(p)?e.then((e=>e[o])):(...t)=>e.then((e=>p.apply(e,t))))(o,n,e[n]):((e,o)=>t(o)?o.bind(e):o)(o,o[n])};var n=(e,...t)=>new Proxy(fetch(e,...t),o);export{n as default};