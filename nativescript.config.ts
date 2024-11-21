import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.hairstyleexplorer',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    discardUncaughtJsExceptions: true
  },
  webpackConfigPath: 'webpack.config.js',
  useLibs: true,
  preview: {
    port: 3000
  }
} as NativeScriptConfig;