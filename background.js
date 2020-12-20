'use strict';

chrome.omnibox.onInputChanged.addListener(
  function (text, suggest) {
    suggest([
      { content: text, description: text }
    ]);
  });

chrome.omnibox.onInputEntered.addListener(
  function (text) {
    alert('You just typed "' + text + '"');
  });
