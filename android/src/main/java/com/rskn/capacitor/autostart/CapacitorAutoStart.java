package com.rskn.capacitor.autostart;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.util.Log;

public class CapacitorAutoStart {

    public static final String PREFS = "autostart";
    public static final String ACTIVITY_CLASS_NAME = "class";
    public static final String SERVICE_CLASS_NAME = "service";

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }

    public void enableAutoStart(final String className, boolean isService, Activity activity) {
        if (className != null) {
            setAutoStart(className, true, isService, activity);
        }
    }

    public void disableAutoStart(Activity activity) {
        setAutoStart(null, false, false, activity);
    }

    private void setAutoStart(final String className, boolean enabled, boolean isService, Activity activity) {

        Context context = activity.getApplicationContext();
        int componentState;
        SharedPreferences sp = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        if (enabled) {
            componentState = PackageManager.COMPONENT_ENABLED_STATE_ENABLED;
            // Store the class name of your service or main activity for AppStarter
            final String preferenceKey = isService ? SERVICE_CLASS_NAME : ACTIVITY_CLASS_NAME;
            editor.putString(preferenceKey, className);
        } else {
            componentState = PackageManager.COMPONENT_ENABLED_STATE_DISABLED;
            editor.remove(ACTIVITY_CLASS_NAME);
            editor.remove(SERVICE_CLASS_NAME);
        }
        editor.commit();
        // Enable or Disable BootCompletedReceiver
        ComponentName bootCompletedReceiver = new ComponentName(context, BootCompleteReceiver.class);
        PackageManager pm = context.getPackageManager();
        pm.setComponentEnabledSetting(bootCompletedReceiver, componentState, PackageManager.DONT_KILL_APP);
    }
}
