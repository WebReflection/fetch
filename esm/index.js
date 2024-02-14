const r = Object.getOwnPropertyDescriptors(Response.prototype);

const isFunction = value => typeof value === 'function';

const bypass = (p, k, { get, value }) => get || !isFunction(value) ?
                p.then(r => r[k]) :
                (...a) => p.then(r => value.apply(r, a));

const direct = (p, value) => isFunction(value) ? value.bind(p) : value;

const handler = {
    get: (p, k) => r.hasOwnProperty(k) ? bypass(p, k, r[k]) : direct(p, p[k])
};

/**
 * @param {RequestInfo | URL} input
 * @param {RequestInit[]} init
 * @returns {Promise<Response> & Response}
 */
export default (input, ...init) => new Proxy(fetch(input, ...init), handler);
