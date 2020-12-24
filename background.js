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
  // Network interface
  else if (text.startsWith("eni-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#NIC:networkInterfaceId=${text};sort=networkInterfaceId`;
    return (newUrl);
  }
  // Volume
  else if (text.startsWith("vol-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#Volumes:volumeId=${text};sort=desc:createTime`;
    return (newUrl);
  }
  // Key pair
  else if (text.startsWith("key-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#KeyPairs:key-pair-id=${text}`;
    return (newUrl);
  }
  // AMI
  else if (text.startsWith("ami-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#Images:visibility=owned-by-me;imageId=${text};sort=name`;
    return (newUrl);
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
  // VPC
  else if (service == 'ec2' && resourceType == 'vpc') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // EC2 instance
  else if (service == 'ec2' && resourceType == 'instance') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // Security group
  else if (service == 'ec2' && resourceType == 'security-group') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // Transit gateway
  else if (service == 'ec2' && resourceType == 'transit-gateway') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // DHCP options
  else if (service == 'ec2' && resourceType == 'dhcp-options') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // Internet gateway
  else if (service == 'ec2' && resourceType == 'internet-gateway') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // Network ACL
  else if (service == 'ec2' && resourceType == 'network-acl') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // Subnet
  else if (service == 'ec2' && resourceType == 'subnet') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // Route table
  else if (service == 'ec2' && resourceType == 'route-table') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // Network interface
  else if (service == 'ec2' && resourceType == 'network-interface') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // Volume
  else if (service == 'ec2' && resourceType == 'volume') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // Key pair
  else if (service == 'ec2' && resourceType == 'key-pair') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // AMI
  else if (service == 'ec2' && resourceType == 'image') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // Cloudformation stack
  else if (service == 'cloudformation' && resourceType == 'stack') {
    var stackResourceID = resourceID.split("/")
    var stackName = stackResourceID[0];
    var stackID = stackResourceID[1];
    var newUrl = `https://${region}.console.aws.amazon.com/cloudformation/home?region=${region}#/stacks?filteringText=${stackName}&filteringStatus=active&viewNested=true&hideStacks=false`;
    return (newUrl);
  }
  // Secretsmanager secret
  else if (service == 'secretsmanager' && resourceType == 'secret') {
    var secretName = resourceID.substring(0, resourceID.length-7);
    var newUrl = `https://${region}.console.aws.amazon.com/secretsmanager/home?region=${region}#/secret?name=${secretName}`;
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
    if (resourceSections.length >= 2) {
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