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
          var themeState = localStorage.getItem("state");

          if (themeState == "on") {
            document.body.classList.remove(darkThemeClass);
            localStorage.removeItem("state");
          } else {
            document.body.classList.add(darkThemeClass);
            localStorage.setItem("state", "on");
          }

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
