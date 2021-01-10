'use strict';

import { parseARN, getServiceFromResourceType, getNewURLFromResourceID, getNewURLFromResourceType } from "./lib";

test('Test getServiceFromResourceType returns correct resource type for service', () => {
  expect(getServiceFromResourceType('project')).toBe('codebuild');
  expect(getServiceFromResourceType('function')).toBe('lambda');
  expect(getServiceFromResourceType('rule')).toBe('events');
  expect(getServiceFromResourceType('log-group')).toBe('logs');
  expect(getServiceFromResourceType('vpc')).toBe('ec2');
  expect(getServiceFromResourceType('instance')).toBe('ec2');
  expect(getServiceFromResourceType('security-group')).toBe('ec2');
  expect(getServiceFromResourceType('transit-gateway')).toBe('ec2');
  expect(getServiceFromResourceType('dhcp-options')).toBe('ec2');
  expect(getServiceFromResourceType('internet-gateway')).toBe('ec2');
  expect(getServiceFromResourceType('network-acl')).toBe('ec2');
  expect(getServiceFromResourceType('subnet')).toBe('ec2');
  expect(getServiceFromResourceType('route-table')).toBe('ec2');
  expect(getServiceFromResourceType('network-interface')).toBe('ec2');
  expect(getServiceFromResourceType('volume')).toBe('ec2');
  expect(getServiceFromResourceType('key-pair')).toBe('ec2');
  expect(getServiceFromResourceType('image')).toBe('ec2');
  expect(getServiceFromResourceType('stack')).toBe('cloudformation');
  expect(getServiceFromResourceType('secret')).toBe('secretsmanager');
  expect(getServiceFromResourceType('table')).toBe('dynamodb');
  expect(getServiceFromResourceType('vpn-gateway')).toBe('ec2');
  expect(getServiceFromResourceType('cluster')).toBe('rds');
  expect(getServiceFromResourceType('task-definition')).toBe('ecs');
  expect(getServiceFromResourceType('cluster')).toBe('rds');
  expect(getServiceFromResourceType('db')).toBe('rds');
  expect(getServiceFromResourceType('stateMachine')).toBe('states');
  expect(getServiceFromResourceType('user')).toBe('iam');
  expect(getServiceFromResourceType('group')).toBe('iam');
  expect(getServiceFromResourceType('role')).toBe('iam');
  expect(getServiceFromResourceType('policy')).toBe('iam');
});

test('Test parseARN parses ARNs correctly', () => {
  expect(parseARN('arn:aws:ecs:ap-southeast-2:469186273004:cluster/service-cluster')).toStrictEqual({ service: 'ecs', region: 'ap-southeast-2', accountID: '469186273004', resourceType: 'cluster', resourceID: 'service-cluster', additionalID: undefined });
});
