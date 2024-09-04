package com.rskn.capacitor.autostart;

import android.Manifest;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;

@CapacitorPlugin(name = "CapacitorAutoStart",
        permissions = {
                @Permission(alias = "boot", strings = {Manifest.permission.RECEIVE_BOOT_COMPLETED})
        }
)
public class CapacitorAutoStartPlugin extends Plugin {

    private CapacitorAutoStart implementation = new CapacitorAutoStart();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void enable(PluginCall call){
        implementation.enableAutoStart(getBridge().getActivity().getLocalClassName(), false, getBridge().getActivity());
        call.resolve();
    }

    @PluginMethod
    public void enableService(PluginCall call){
        implementation.enableAutoStart(getBridge().getActivity().getLocalClassName(), false, getBridge().getActivity());
    }

    @PluginMethod
    public void disable(PluginCall call){
        implementation.disableAutoStart(getBridge().getActivity());
    }
}
