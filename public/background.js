chrome.action.onClicked.addListener(() => {
  chrome.system.display.getInfo((displays) => {
    const primaryDisplay = displays.find((d) => d.isPrimary) || displays[0];
    const { width: screenWidth, height: screenHeight } = primaryDisplay.bounds;

    const left = Math.round((screenWidth - 612) / 2);
    const top = Math.round((screenHeight - 639) / 2);

    chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      type: "popup",
      focused: true,
      width: 612,
      height: 639,
      left,
      top,
    });
  });
});
