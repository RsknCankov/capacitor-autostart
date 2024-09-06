import { WebPlugin } from '@capacitor/core';
export class CapacitorAutoStartWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map