var Arr = require('./Arr');

class Cache {
    constructor() {
        this.store = {};
    }

    /**
     * Return the store.
     * @return {Object}
     */
    all() {
        return this.store;
    }

    has(key) {
        return key in this.store;
    }

    /**
     * Push the value to the given key. Create the array when the key does not exist.
     * @param  {String} key
     * @param  {mixed} values
     * @return {void}
     */
    push(key, values) {
        if (! this.has(key)) {
            this.store[key] = new Array;
        }

        this.store[key] = Arr.unique(values);
        this.store[key].sort();
    }

    /**
     * Return the cache from the given key.
     * @param  {String} key
     * @return {Array}
     */
    get(key) {
        return this.store[key];
    }

    /**
     * Return the compiled flat array.
     * @return {Array}
     */
    compile() {
        let compiled = [];

        for (let index in this.store) {
            let cache = this.store[index];

            compiled = compiled.concat(cache);
        }

        compiled.sort();

        return Arr.unique(compiled);
    }

    /**
     * Build the css.
     * @param  {String} wrapper = null
     * @return {String}
     */
    stringify(wrapper = null) {
        if (! wrapper) {
            return this.compile().join("\n");
        }

        let indented = this.compile().map(style => `\t${style}`);

        return `${wrapper} {
${indented.join("\n")}
}`;
    }
}

module.exports = Cache;
