function applyRules(tabId) {
  let targetTab = browser.tabs.get(tabId);
  browser.tabs.executeScript(tabId, {
    code: "document.title = ' ';",
    runAt: "document_start"
  });
}

browser.tabs.onUpdated.addListener(
    (tabId) => {
        applyRules(tabId);
    }
);
