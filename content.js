"use strict";

let darkThemeClass = "dark";

chrome.storage.sync.get(["state"], function (result) {
  if (result.state == "on") {
    document.body.classList.add(darkThemeClass);
  }
});
