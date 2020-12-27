'use strict';

var region;

function navigate(url) {
  chrome.tabs.update({ url: url });
}

function setRegion(regionText) {
  region = regionText;
}

function getNewURLFromResourceID(resourceID) {
  // VPC
  if (resourceID.startsWith("vpc-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#VpcDetails:VpcId=${resourceID}`;
    return (newUrl);
  }
  // EC2 instance
  else if (resourceID.startsWith("i-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#InstanceDetails:instanceId=${resourceID}`;
    return (newUrl);
  }
  // Security group
  else if (resourceID.startsWith("sg-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#SecurityGroup:groupId=${resourceID}`;
    return (newUrl);
  }
  // Transit gateway
  else if (resourceID.startsWith("tgw-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#TransitGateways:transitGatewayId=${resourceID}`;
    return (newUrl);
  }
  // DHCP option
  else if (resourceID.startsWith("dopt-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#dhcpOptions:filter=${resourceID}`;
    return (newUrl);
  }
  // Internet gateway
  else if (resourceID.startsWith("igw-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#igws:search=${resourceID}`;
    return (newUrl);
  }
  // Network ACL
  else if (resourceID.startsWith("acl-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#acls:filter=${resourceID}`;
    return (newUrl);
  }
  // Subnet
  else if (resourceID.startsWith("subnet-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#subnets:filter=${resourceID}`;
    return (newUrl);
  }
  // Route table
  else if (resourceID.startsWith("rtb-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#routetables:filter=${resourceID}`;
    return (newUrl);
  }
  // Network interface
  else if (resourceID.startsWith("eni-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#NIC:networkInterfaceId=${resourceID};sort=networkInterfaceId`;
    return (newUrl);
  }
  // Volume
  else if (resourceID.startsWith("vol-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#Volumes:volumeId=${resourceID};sort=desc:createTime`;
    return (newUrl);
  }
  // Key pair
  else if (resourceID.startsWith("key-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#KeyPairs:key-pair-id=${resourceID}`;
    return (newUrl);
  }
  // AMI
  else if (resourceID.startsWith("ami-") == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#Images:visibility=owned-by-me;imageId=${resourceID};sort=name`;
    return (newUrl);
  }
  // Virtual private gateway
  else if (resourceID.startsWith('vgw-') == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#VpnGateways:search=${resourceID};sort=VpnGatewayId`;
    return (newUrl);
  }
  // EC2 snapshot
  else if (resourceID.startsWith('snap-') == true) {
    var newUrl = `https://${region}.console.aws.amazon.com/ec2/v2/home?region=${region}#Snapshots:visibility=owned-by-me;snapshotId=${resourceID};sort=snapshotId`;
    return (newUrl);
  }
  else {
    unsupportedResourceAlert(resourceID);
  }
}

function getNewURLFromResourceType(service, region, accountID, resourceType, resourceID, additionalID) {
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
    var stackName = resourceID;
    var stackID = additionalID;
    var newUrl = `https://${region}.console.aws.amazon.com/cloudformation/home?region=${region}#/stacks/stackinfo?stackId=arn%3Aaws%3Acloudformation%3A${region}%3A${accountID}%3Astack%2F${stackName}%2F${stackID}&filteringText=${stackName}&filteringStatus=active&viewNested=true&hideStacks=false`;
    return (newUrl);
  }
  // Secretsmanager secret
  else if (service == 'secretsmanager' && resourceType == 'secret') {
    var secretName = resourceID.substring(0, resourceID.length - 7);
    var newUrl = `https://${region}.console.aws.amazon.com/secretsmanager/home?region=${region}#/secret?name=${secretName}`;
    return (newUrl);
  }
  // DynamoDB table
  else if (service == 'dynamodb' && resourceType == 'table') {
    var newUrl = `https://${region}.console.aws.amazon.com/dynamodb/home?region=${region}#tables:selected=${resourceID};tab=overview`;
    return (newUrl);
  }
  // Virtual private gateway
  else if (service == 'ec2' && resourceType == 'vpn-gateway') {
    var newUrl = getNewURLFromResourceID(resourceID);
    return (newUrl);
  }
  // ECS cluster
  else if (service == 'ecs' && resourceType == 'cluster') {
    var newUrl = `https://${region}.console.aws.amazon.com/ecs/home?region=${region}#/clusters/${resourceID}/services`;
    return (newUrl);
  }
  // ECS task definition
  else if (service == 'ecs' && resourceType == 'task-definition') {
    var newUrl;
    if (additionalID) {
      var newUrl = `https://${region}.console.aws.amazon.com/ecs/home?region=${region}#/taskDefinitions/${resourceID}/${additionalID}`;
      return newUrl;
    }
    else {
      var newUrl = `https://${region}.console.aws.amazon.com/ecs/home?region=${region}#/taskDefinitions/${resourceID}`;
      return (newUrl);
    }
  }
  // RDS cluster
  else if (service == 'rds' && resourceType == 'cluster') {
    var newUrl = `https://${region}.console.aws.amazon.com/rds/home?region=${region}#database:id=${resourceID};is-cluster=true`;
    return (newUrl);
  }
  // RDS DB
  else if (service == 'rds' && resourceType == 'db') {
    var newUrl = `https://${region}.console.aws.amazon.com/rds/home?region=${region}#database:id=${resourceID};is-cluster=false`;
    return (newUrl);
  }
  // SQS queue
  else if (service == 'sqs') {
    var newUrl = `https://${region}.console.aws.amazon.com/sqs/v2/home?region=${region}#/queues/https%3A%2F%2Fsqs.${region}.amazonaws.com%2F${accountID}%2F${resourceID}`;
    return (newUrl);
  }
  // SNS topic
  else if (service == 'sns') {
    var newUrl = `https://${region}.console.aws.amazon.com/sns/v3/home?region=${region}#/topic/arn:aws:sns:${region}:${accountID}:${resourceID}`;
    return (newUrl);
  }
  // State machine state
  else if (service == 'states' && resourceType == 'stateMachine') {
    var newUrl = `https://${region}.console.aws.amazon.com/states/home?region=${region}#/statemachines/view/arn:aws:states:${region}:${accountID}:stateMachine:${resourceID}`;
    return (newUrl);
  }
  else {
    unsupportedResourceAlert(resourceType);
  }
}

function getServiceFromResourceType(service) {
  var map = new Map();
  map.set('project', 'codebuild');
  map.set('function', 'lambda');
  map.set('rule', 'events');
  map.set('log-group', 'logs');
  map.set('vpc', 'ec2');
  map.set('instance', 'ec2');
  map.set('security-group', 'ec2');
  map.set('transit-gateway', 'ec2');
  map.set('dhcp-options', 'ec2');
  map.set('internet-gateway', 'ec2');
  map.set('network-acl', 'ec2');
  map.set('subnet', 'ec2');
  map.set('route-table', 'ec2');
  map.set('network-interface', 'ec2');
  map.set('volume', 'ec2');
  map.set('key-pair', 'ec2');
  map.set('image', 'ec2');
  map.set('stack', 'cloudformation');
  map.set('secret', 'secretsmanager');
  map.set('table', 'dynamodb');
  map.set('vpn-gateway', 'ec2');
  map.set('cluster', 'ecs');
  map.set('task-definition', 'ecs');
  map.set('cluster', 'rds');
  map.set('db', 'rds');
  map.set('stateMachine', 'states');
  return map.get(service);
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
      var accountID = sections.accountID;
      var resourceType = sections.resourceType;
      var resourceID = sections.resourceID;
      var additionalID = sections.additionalID;
      var newURL = getNewURLFromResourceType(service, region, accountID, resourceType, resourceID, additionalID);
      navigate(newURL);
    }
    // Navigate by resource type with resourceType:resourceID (ARN substring)
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
      var newURL = getNewURLFromResourceID(text);
      navigate(newURL);
    }
    else {
      unsupportedResourceAlert(text);
    }
  });

function parseARN(arn) {
  var sections = arn.split(":");
  var service = sections[2];
  if (sections[3].length != 0)
    region = sections[3];
  var accountID = sections[4];
  var resourceType;
  var resourceID;
  var additionalID;
  if (sections.length >= 7) {
    resourceType = sections[5];
    resourceID = sections[6];
    return { service: service, region: region, accountID: accountID, resourceType: resourceType, resourceID: resourceID };
  }
  else if (sections.length == 6) {
    var resource = sections[5];
    var resourceSections = resource.split("/");
    if (resourceSections.length >= 2) {
      resourceType = resourceSections[0];
      resourceID = resourceSections[1];
      additionalID = resourceSections[2];
      return { service: service, region: region, accountID: accountID, resourceType: resourceType, resourceID: resourceID, additionalID: additionalID };
    }
    else {
      resourceType = undefined;
      resourceID = sections[5];
      return { service: service, region: region, accountID: accountID, resourceType: resourceType, resourceID: resourceID };
    }
  }
  else {
    unsupportedResourceAlert(arn);
  }
}

function unsupportedResourceAlert(text) {
  alert(
    `Sorry, unsupported AWS resource - ${text}.

Try navigating by:
* Resource ID
* ARN
* resourceType:resourceID (ARN substring)

If the resource is unsupported, please submit an issue or pull request to the AWSConsoleNavigator project on GitHub, thank you.
https://github.com/upsatish/AWSConsoleNavigator`
  ); // TODO: navigate to unsupported resource contributing URL
}