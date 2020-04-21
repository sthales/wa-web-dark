document.addEventListener(
  "DOMContentLoaded",
  function () {
    var toggleBtn = document.getElementById("toggle-dark-theme");
    var body = document.body;
    toggleBtn.addEventListener(
      "click",
      function () {
        function modifyDOM() {
          let darkThemeClass = "dark";

          chrome.storage.sync.get(["state"], function (result) {
            if (result.state == "on") {
              document.body.classList.remove(darkThemeClass);
              chrome.storage.sync.remove("state");
            } else {
              document.body.classList.add(darkThemeClass);
              chrome.storage.sync.set({ state: "on" });
            }
          });

          return document.body.innerHTML;
        }

        chrome.tabs.executeScript({
          code: "(" + modifyDOM + ")();",
        });
      },
      false
    );
  },
  false
);
