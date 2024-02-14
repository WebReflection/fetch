const fetch = require('../cjs');

const server = require('http').createServer((req, res) => {
    res.end('OK');
}).listen(7357);

(async () => {
    console.assert(await fetch('http://0.0.0.0:7357/').ok);
    console.assert(await fetch('http://0.0.0.0:7357/').text() === 'OK');

    Promise.prototype.OK = 'OK';
    const local = fetch('http://0.0.0.0:7357/');
    local.then(() => {
        console.log(local.OK);
    });
    console.assert(await local.ok);

    server.close();
})();
