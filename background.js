'use strict';

var region;

function navigate(url) {
  chrome.tabs.update({ url: url });
}

function setRegion(regionText) {
  region = regionText;
}

function getNewURL(text) {
  // VPC
  if (text.startsWith("vpc-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#VpcDetails:VpcId=${encodeURIComponent(text)}`;
    return (newUrl);
  }
  // EC2 instance
  else if (text.startsWith("i-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#InstanceDetails:instanceId=${encodeURIComponent(text)}`;
    return (newUrl);
  }
  // Security group
  else if (text.startsWith("sg-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#SecurityGroup:groupId=${encodeURIComponent(text)}`;
    return (newUrl);
  }
  // Transit gateway
  else if (text.startsWith("tgw-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#TransitGateways:transitGatewayId=${encodeURIComponent(text)}`;
    return (newUrl);
  }
  // DHCP options
  else if (text.startsWith("dopt-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#dhcpOptions:filter=${encodeURIComponent(text)}`;
    return (newUrl);
  }
  // Internet gateway
  else if (text.startsWith("igw-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#igws:search=${encodeURIComponent(text)}`;
    return (newUrl);
  }
  else {
    alert("Sorry, that AWS resource is currently not supported"); // TODO: navigate to unsupported resource contributing URL
  }
}

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ region: 'us-east-1' });
});

chrome.omnibox.onInputStarted.addListener(function () {
  chrome.storage.sync.get('region', function (data) { setRegion(data.region) });
});

chrome.omnibox.onInputChanged.addListener(
  function (text, suggest) {
    suggest([
      { content: text, description: text }
    ]);
  });

chrome.omnibox.onInputEntered.addListener(
  function (text) {
    var newURL = getNewURL(text);
    navigate(newURL);
  });