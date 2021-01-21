'use strict';

import { parseARN, getServiceFromResourceType, getNewURLFromResourceID, getNewURLFromResourceType } from "./lib.js";

var region;

function navigate(url) {
  chrome.tabs.update({ url: url });
}

function setRegion(regionText) {
  region = regionText;
}


chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({ region: 'us-east-1' });
});

chrome.omnibox.onInputStarted.addListener(function () {
  chrome.storage.local.get('region', function (data) { setRegion(data.region) });
});

chrome.omnibox.onInputChanged.addListener(
  function (text, suggest) {
    suggest([
      {
        content: "Region is set to " + region + " - AWS Console Navigator",
        description: "Region is set to " + region + " - AWS Console Navigator"
      },
      {
        content: "Click the AWS Console Navigator extension icon to select the AWS region - AWS Console Navigator",
        description: "Click the AWS Console Navigator extension icon to select the AWS region - AWS Console Navigator"
      }
    ]);
  });

chrome.omnibox.onInputEntered.addListener(
  function (text) {
    // Navigate by ARN
    if (text.startsWith("arn:") == true) {
      var sections = parseARN(text);
      var service = sections.service;
      if (typeof sections.region !== "undefined")
        region = sections.region;
      var accountID = sections.accountID;
      var resourceType = sections.resourceType;
      var resourceID = sections.resourceID;
      var additionalID = sections.additionalID;
      var newURL = getNewURLFromResourceType(service, region, accountID, resourceType, resourceID, additionalID);
      navigate(newURL);
    }
    // Navigate by resource type with resourceType:resourceID or resourceType/resourceID (ARN substring)
    else if ((text.includes(":") == true) || (text.includes("/") == true)) {
      var sections;
      if (text.includes(":"))
        sections = text.split(":");
      if (text.includes("/"))
        sections = text.split("/");
      var resourceType = sections[0];
      var resourceID = sections[1];
      var additionalID = sections[2];
      var service = getServiceFromResourceType(resourceType);
      var newURL = getNewURLFromResourceType(service, region, undefined, resourceType, resourceID, additionalID);
      navigate(newURL);
    }
    // Navigate by Resource ID
    else if (text.includes("-") == true) {
      var newURL = getNewURLFromResourceID(text, region);
      navigate(newURL);
    }
    else {
      unsupportedResourceAlert(text);
    }
  });
