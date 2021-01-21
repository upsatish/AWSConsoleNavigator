'use strict';

function click(e) {
  var anchor = e.target;
  chrome.storage.local.set({ region: anchor.getElementsByTagName('span')[1].innerText });
  anchor.classList.remove('lHvoJaI3JYcWxPbHs_d1P');
  anchor.classList.add('_1ecBdO_UxiGqi646INtZ9W');
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var anchors = document.querySelectorAll('a');
  chrome.storage.local.get(['region'], function (data) {
    var region = data.region;
    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', click);
      if (anchor.getElementsByTagName('span')[1].innerText == region) {
        anchor.classList.remove('lHvoJaI3JYcWxPbHs_d1P');
        anchor.classList.add('_1ecBdO_UxiGqi646INtZ9W');
      }
    });
  });
});