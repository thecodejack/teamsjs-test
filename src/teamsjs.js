import { teamsCore, app } from "@microsoft/teams-js";
import { initializeMetaOsAppSdk } from "./initializeMetaOSSDK";

export async function registerTeamsJSHooks() {
  await initializeMetaOsAppSdk();
  teamsCore.registerOnLoadHandler(async (loadContext) => {
    app.notifyAppLoaded();
    app.notifySuccess();
  });

  teamsCore.registerBeforeUnloadHandler((readyToUnload) => {
    readyToUnload();
    return true;
  });
}

registerTeamsJSHooks();
