const fetch = require('../cjs');

const PORT = 7357;
const URL = `http://0.0.0.0:${PORT}/`;

const server = require('http').createServer((_, res) => {
    res.end('OK');
}).listen(PORT);

(async () => {
    console.assert(await fetch(URL).ok);
    console.assert(await fetch(URL).text() === 'OK');

    Promise.prototype.OK = 'OK';
    const local = fetch(URL);
    local.then(() => {
        console.log(local.OK);
    });
    console.assert(await local.ok);

    server.close();
})();
