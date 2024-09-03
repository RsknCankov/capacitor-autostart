import { WebPlugin } from '@capacitor/core';

import type { CapacitorAutoStartPlugin } from './definitions';

export class CapacitorAutoStartWeb
  extends WebPlugin
  implements CapacitorAutoStartPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
