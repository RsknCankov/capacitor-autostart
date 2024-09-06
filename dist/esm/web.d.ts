import { WebPlugin } from '@capacitor/core';
import type { CapacitorAutoStartPlugin } from './definitions';
export declare class CapacitorAutoStartWeb extends WebPlugin implements CapacitorAutoStartPlugin {
    enable(): void;
    enableService(_id: string): void;
    disable(): void;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
