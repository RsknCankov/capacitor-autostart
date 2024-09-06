'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorAutoStart = core.registerPlugin('CapacitorAutoStart', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorAutoStartWeb()),
});

class CapacitorAutoStartWeb extends core.WebPlugin {
    enable() {
        throw new Error('Method not implemented.');
    }
    enableService(_id) {
        throw new Error('Method not implemented.');
    }
    disable() {
        throw new Error('Method not implemented.');
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorAutoStartWeb: CapacitorAutoStartWeb
});

exports.CapacitorAutoStart = CapacitorAutoStart;
//# sourceMappingURL=plugin.cjs.js.map
