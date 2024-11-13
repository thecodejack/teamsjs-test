import { teamsCore, app, sendCustomMessage as sendCustomMessageMetaOS } from "@microsoft/teams-js";
import { initializeMetaOsAppSdk } from "./initializeMetaOSSDK";


export async function registerTeamsJSHooks() {
  await initializeMetaOsAppSdk();
  teamsCore.registerOnLoadHandler(async (loadContext) => {
      
  });

  teamsCore.registerBeforeUnloadHandler((readyToUnload) => {
    window.location.replace(getReloadUrl());
    return true;
  });
  if(isAppCachingEnabled()) {
      notifyReadyToUnload();
  } else {
      app.notifyAppLoaded(); 
  }
}

export function isAppCachingEnabled() {
  const currentUrl = new URL(window.location.href);
  return currentUrl.searchParams.get('isAppCaching') === 'true';
}

export const getReloadUrl = () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    if (!isAppCachingEnabled()) {
        params.append('isAppCaching', 'true');
    }
    url.search = params.toString();
    return url.toString();
};

export function notifyReadyToUnload() {
    setTimeout(() => {
        sendCustomMessageMetaOS('readyToUnload');
    }, 5000); 
}

export function notifySuccess() {
    app.notifySuccess();
}

registerTeamsJSHooks();
