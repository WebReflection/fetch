const fetch = require('../cjs');

const PORT = 7357;
const URL = `http://0.0.0.0:${PORT}/`;

const server = require('http').createServer((req, res) => {
    if (req.url === '/unknown') {
        res.statusCode = 404;
        res.end('NOT FOUND');
        return;
    }
    res.end('OK');
}).listen(PORT);

(async () => {
    console.assert(await fetch(URL).ok);
    console.assert(await fetch(URL).text() === 'OK');

    try {
        await fetch(`http://0.0.0.0:${PORT - 1}/`);
        throw new Error('Should have failed');
    } catch ({ message }) {
        console.assert(message !== `Should have failed`, message);
    }

    try {
        await fetch(URL + 'unknown');
        throw new Error('Should have failed');
    } catch ({ message }) {
        console.assert(message === `[404] Unable to fetch http://0.0.0.0:7357/unknown`, message);
    }

    await fetch(URL).json().catch(error => {
        console.log('\x1b[1mexpected:\x1b[0m', error);
    });

    Promise.prototype.OK = 'OK';
    const local = fetch(URL);
    local.then(() => {
        console.log(local.OK);
    });
    console.assert(await local.ok);

    server.close();
})();
