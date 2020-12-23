'use strict';

var region;

function navigate(url) {
  chrome.tabs.update({ url: url });
}

function setRegion(regionText) {
  region = regionText;
}

function getNewURLFromResourceID(text) {
  // VPC
  if (text.startsWith("vpc-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#VpcDetails:VpcId=${text}`;
    return (newUrl);
  }
  // EC2 instance
  else if (text.startsWith("i-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#InstanceDetails:instanceId=${text}`;
    return (newUrl);
  }
  // Security group
  else if (text.startsWith("sg-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#SecurityGroup:groupId=${text}`;
    return (newUrl);
  }
  // Transit gateway
  else if (text.startsWith("tgw-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#TransitGateways:transitGatewayId=${text}`;
    return (newUrl);
  }
  // DHCP option
  else if (text.startsWith("dopt-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#dhcpOptions:filter=${text}`;
    return (newUrl);
  }
  // Internet gateway
  else if (text.startsWith("igw-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#igws:search=${text}`;
    return (newUrl);
  }
  // Network ACL
  else if (text.startsWith("acl-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#acls:filter=${text}`;
    return (newUrl);
  }
  // Subnet
  else if (text.startsWith("subnet-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#subnets:filter=${text}`;
    return (newUrl);
  }
  // Route table
  else if (text.startsWith("rtb-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#routetables:filter=${text}`;
    return (newUrl);
  }
  else {
    alert("Sorry, unsupported AWS resource"); // TODO: navigate to unsupported resource contributing URL
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
      if (sections.region.length != 0)
        region = sections.region;
      var resourceType = sections.resourceType;
      var resourceID = sections.resourceID;
      var newURL = getNewURLFromResourceType(service, region, resourceType, resourceID);
      navigate(newURL);
    }
    else {
      // Navigate by Resource ID
      var newURL = getNewURLFromResourceID(text);
      navigate(newURL);
    }
  });

function parseARN(arn) {
  var sections = arn.split(":");
  var service = sections[2];
  if (sections[3].length != 0)
    region = sections[3];
  var resourceType;
  var resourceID;
  if (sections.length >= 7) {
    resourceType = sections[5];
    resourceID = sections[6];
    return { service: service, region: region, resourceType: resourceType, resourceID: resourceID };
  }
  else if (sections.length == 6) {
    var resource = sections[5];
    var resourceSections = resource.split("/");
    if (resourceSections.length == 2) {
      resourceType = resourceSections[0];
      resourceID = resourceSections[1];
      return { service: service, region: region, resourceType: resourceType, resourceID: resourceID };
    }
    else {
      resourceType = undefined;
      resourceID = sections[5];
      return { service: service, region: region, resourceType: resourceType, resourceID: resourceID };
    }
  }
  else {
    alert("Sorry, unsupported AWS resource"); // TODO: navigate to unsupported resource contributing URL
  }
}

function getNewURLFromResourceType(service, region, resourceType, resourceID) {
  // S3 bucket
  if (service == 's3') {
    var newUrl = `https://${region}.console.aws.amazon.com/s3/buckets/${resourceID}?region=${region}&tab=properties`;
    return (newUrl);
  }
  // Codebuild project
  else if (service == 'codebuild' && resourceType == 'project') {
    var newUrl = `https://${region}.console.aws.amazon.com/codesuite/codebuild/projects/${resourceID}?region=${region}`;
    return (newUrl);
  }
  // Lambda function
  else if (service == 'lambda' && resourceType == 'function') {
    var newUrl = `https://${region}.console.aws.amazon.com/lambda/home?region=${region}#/functions/${resourceID}?tab=configuration`;
    return (newUrl);
  }
  // Cloudwatch events rule
  else if (service == 'events' && resourceType == 'rule') {
    var newUrl = `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#rules:name=${resourceID}`;
    return (newUrl);
  }
  // Cloudwatch log group
  else if (service == 'logs' && resourceType == 'log-group') {
    var newUrl = `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#logsV2:log-groups/log-group/${encodeURIComponent(resourceID)}`;
    return (newUrl);
  }
}
