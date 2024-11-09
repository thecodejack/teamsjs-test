import { teamsCore, app, sendCustomMessage as sendCustomMessageMetaOS } from "@microsoft/teams-js";
import { initializeMetaOsAppSdk } from "./initializeMetaOSSDK";


export async function registerTeamsJSHooks() {
  await initializeMetaOsAppSdk();
  teamsCore.registerOnLoadHandler(async (loadContext) => {
    if(isAppCachingEnabled()) {
      notifyReadyToUnload();
    } else {
      app.notifyAppLoaded();
      app.notifySuccess(); 
    }
  });

  teamsCore.registerBeforeUnloadHandler((readyToUnload) => {
    // Add the query string to the current URL
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('isAppCaching', 'true');
    window.history.replaceState({}, '', currentUrl.toString());
    return true;
  });
}

export function function isAppCachingEnabled() {
  const currentUrl = new URL(window.location.href);
  return currentUrl.searchParams.get('isAppCaching') === 'true';
}

export function notifyReadyToUnload() {
    setTimeout(() => {
        sendCustomMessageMetaOS('readyToUnload');
    }, 10000); // 10 seconds (10000 milliseconds)
}

registerTeamsJSHooks();
