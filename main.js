"use strict";
import DATALIST from "./datalist.js";

(() => {
  document
    .getElementById("boostPrice")
    .addEventListener("click", () => copyToClipboard("boosting", "price"));
  document
    .getElementById("boostPackage")
    .addEventListener("click", () => copyToClipboard("boosting", "package"));
  document
    .getElementById("boostNeeds")
    .addEventListener("click", () => copyToClipboard("boosting", "needs"));
  document
    .getElementById("boostPayment")
    .addEventListener("click", () => copyToClipboard("boosting", "payment"));
})();

export const copyToClipboard = (topic, keyword) => {
  let reply = DATALIST[topic][keyword];
  let tempTextarea = document.createElement("textarea");
  tempTextarea.textContent = reply;
  tempTextarea.setAttribute("id", "tempTextarea");
  document.body.append(tempTextarea);
  document.getElementById("tempTextarea").select();
  document.execCommand("copy");
  document.getElementById("tempTextarea").remove();
};
