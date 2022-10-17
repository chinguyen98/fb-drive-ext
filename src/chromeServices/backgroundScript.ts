let enabledRule: chrome.events.Rule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostSuffix: '.facebook.com', schemes: ['https'] },
    }),
  ],
  actions: [new chrome.declarativeContent.ShowAction()],
};

chrome.runtime.onInstalled.addListener((details) => {
  chrome.action.disable();
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([enabledRule]);
  });
});

export {};
