import { 
  requestPermissions,
  requestCameraPermissions,
} from '@nativescript/core';

export function registerCameraPermissions() {
  if (global.isAndroid) {
    requestPermissions([
      android.Manifest.permission.CAMERA,
      android.Manifest.permission.WRITE_EXTERNAL_STORAGE
    ]);
  } else if (global.isIOS) {
    requestCameraPermissions();
  }
}