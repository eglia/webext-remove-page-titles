browser.tabs.onUpdated.addListener(
  (tabId) => {
    browser.tabs.executeScript(tabId, {
      code: "document.title = ' ';",
      runAt: "document_start"
    });
  }
);
