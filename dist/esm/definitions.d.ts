import { PermissionState } from '@capacitor/core';
export interface PermissionStatus {
    boot: PermissionState;
}
export interface CapacitorAutoStartPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    /**
     * Android: activates the automatic start of your app
     *           after the reboot of the device
     *
     * macOS: N/A.
     */
    enable(): void;
    /**
     * Android: activates the automatic start of an arbitrary (exported) service,
     *          with class name `id`, after the reboot of the device.
     *
     * macOS: enables a helper application, with bundle identifier, `id`,
     *        to launch at boot.
     */
    enableService(id: string): void;
    /**
     * Android: deactivates the automatic start of your app and service
     *          after the reboot of the device
     *
     * macOS: disables a previously enabled helper application from launching
     *         at boot.
     */
    disable(): void;
}
