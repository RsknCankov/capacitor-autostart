import { WebPlugin } from '@capacitor/core';

import type { CapacitorAutoStartPlugin } from './definitions';

export class CapacitorAutoStartWeb
  extends WebPlugin
  implements CapacitorAutoStartPlugin
{
  enable(): void {
    throw new Error('Method not implemented.');
  }

  enableService(_id: string): void {
    throw new Error('Method not implemented.');
  }

  disable(): void {
    throw new Error('Method not implemented.');
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
