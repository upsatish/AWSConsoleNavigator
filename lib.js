'use strict';

function parseARN(arn) {
  var region;
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
      for (var i = 3; i < resourceSections.length; i++) {
        additionalID = additionalID + "/" + resourceSections[i];
      }
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

function getServiceFromResourceType(resourceType) {
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
  map.set('user', 'iam');
  map.set('group', 'iam');
  map.set('role', 'iam');
  map.set('policy', 'iam');
  return map.get(resourceType);
}

export { parseARN, getServiceFromResourceType };