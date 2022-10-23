import { requestAccessTokenApi } from 'api/auth.api';
import { LOCAL_STORAGE_KEY } from 'appConstants';
import { enabledRule } from './backgroundScript.rules';

chrome.runtime.onInstalled.addListener((details) => {
  chrome.action.disable();
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([enabledRule]);
  });
});

chrome.runtime.onInstalled.addListener(async () => {
  try {
    const response = await requestAccessTokenApi();
    if (response.access_token && response.refresh_token) {
      chrome.storage.sync.set({ [LOCAL_STORAGE_KEY.ACCESS_TOKEN]: response.access_token }, () => {
        console.info('Access Token setted!');
      });
    }
  } catch (err) {
    console.error(err);
  }
});

export {};
