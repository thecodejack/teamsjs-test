import { teamsCore, app, sendCustomMessage as sendCustomMessageMetaOS } from "@microsoft/teams-js";
import { initializeMetaOsAppSdk } from "./initializeMetaOSSDK";


export async function registerTeamsJSHooks() {
  await initializeMetaOsAppSdk();
  app.notifyAppLoaded();
  teamsCore.registerOnLoadHandler(async (loadContext) => {
      setTimeout(() => {
        notifySuccess();
      }, 10000);
  });

  teamsCore.registerBeforeUnloadHandler((readyToUnload) => {
    setTimeout(()=> {
      readyToUnload();
    }, 5000);
    return true;
  });
}

export function notifySuccess() {
    app.notifySuccess();
}

registerTeamsJSHooks();
