export interface CapacitorAutoStartPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
