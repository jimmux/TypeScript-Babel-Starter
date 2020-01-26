// This one needs a polyfill so NodeList.forEach() works in IE,
// but we want to keep the added code minimal to keep the size
// of output down.

/// <reference path="./legacy_code.js" />

const extracted: string[] = [];
const showMe = document.getElementById("show-me");

document.querySelectorAll(".example")
    .forEach((node: Node) => extracted.push(node.textContent || ""));

const message = extracted.map((s: string) => `${window.prefix} ${s.trim().toLowerCase()}!`).join("<br\>");

if (showMe instanceof HTMLDivElement) {
    showMe.innerHTML = message;
}
