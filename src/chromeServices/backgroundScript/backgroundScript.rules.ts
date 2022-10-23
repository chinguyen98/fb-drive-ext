export const enabledRule: chrome.events.Rule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostSuffix: '.facebook.com', schemes: ['https'] },
    }),
  ],
  actions: [new chrome.declarativeContent.ShowAction()],
};
