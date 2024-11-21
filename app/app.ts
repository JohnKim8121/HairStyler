import { Application } from '@nativescript/core';
import { initFirebase } from './services/firebase';
import { registerCameraPermissions } from './utils/permissions';

// Initialize Firebase
initFirebase()
  .then(() => console.log('Firebase initialized'))
  .catch(error => console.error('Firebase init error:', error));

// Register permissions
registerCameraPermissions();

Application.run({ moduleName: 'app-root' });