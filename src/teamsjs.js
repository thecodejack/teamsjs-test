import { teamsCore, app, sendCustomMessage as sendCustomMessageMetaOS } from "@microsoft/teams-js";
import { initializeMetaOsAppSdk } from "./initializeMetaOSSDK";


export async function registerTeamsJSHooks() {
  await initializeMetaOsAppSdk();
  app.notifyAppLoaded();
  teamsCore.registerOnLoadHandler(async (loadContext) => {
      setTimeout(() => {
        notifySuccess();
      }, 15000);
  });

  teamsCore.registerBeforeUnloadHandler((readyToUnload) => {
    setTimeout(()=> {
      readyToUnload();
    }, 10000);
    return true;
  });
}

export function notifyReadyToUnload() {
    setTimeout(() => {
        sendCustomMessageMetaOS('readyToUnload');
    }, 10000); // 10 seconds (10000 milliseconds)
}

export function notifySuccess() {
    app.notifySuccess();
}

registerTeamsJSHooks();
