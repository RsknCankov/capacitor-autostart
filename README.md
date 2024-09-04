# capacitor-autostart

Starting up you application on system boot

## Install

```bash
npm install capacitor-autostart
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`enable()`](#enable)
* [`enableService(...)`](#enableservice)
* [`disable()`](#disable)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### enable()

```typescript
enable() => void
```

Android: activates the automatic start of your app
          after the reboot of the device

macOS: N/A.

--------------------


### enableService(...)

```typescript
enableService(id: string) => void
```

Android: activates the automatic start of an arbitrary (exported) service,
         with class name `id`, after the reboot of the device.

macOS: enables a helper application, with bundle identifier, `id`,
       to launch at boot.

| Param    | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |

--------------------


### disable()

```typescript
disable() => void
```

Android: deactivates the automatic start of your app and service
         after the reboot of the device

macOS: disables a previously enabled helper application from launching
        at boot.

--------------------

</docgen-api>
