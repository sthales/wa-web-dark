"use strict";

let darkThemeClass = "dark";
if (localStorage.getItem("state") == "on") {
  document.body.classList.add(darkThemeClass);
}
