import { app } from "@microsoft/teams-js";

let initializeMetaAppSdkPromise;
export function initializeMetaOsAppSdk() {
  if (!app.isInitialized() && !initializeMetaAppSdkPromise) {
    initializeMetaAppSdkPromise = app.initialize();
  }
  return initializeMetaAppSdkPromise || Promise.resolve(undefined);
}
