'use strict';

import { parseARN, getServiceFromResourceType, getNewURLFromResourceID, getNewURLFromResourceType } from "./lib.js";

test('Test getServiceFromResourceType returns correct service for resource type', () => {
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
  //expect(getServiceFromResourceType('cluster')).toBe('ecs'); // See CONTRIBUTING.md
  expect(getServiceFromResourceType('task-definition')).toBe('ecs');
  //expect(getServiceFromResourceType('cluster')).toBe('rds'); // See CONTRIBUTING.md
  expect(getServiceFromResourceType('db')).toBe('rds');
  expect(getServiceFromResourceType('stateMachine')).toBe('states');
  expect(getServiceFromResourceType('user')).toBe('iam');
  expect(getServiceFromResourceType('group')).toBe('iam');
  expect(getServiceFromResourceType('role')).toBe('iam');
  expect(getServiceFromResourceType('policy')).toBe('iam');
});

test('Test parseARN parses ARNs correctly', () => {
  expect(parseARN('arn:aws:ecs:ap-southeast-2:469186273004:cluster/service-cluster')).toEqual({ service: 'ecs', region: 'ap-southeast-2', accountID: '469186273004', resourceType: 'cluster', resourceID: 'service-cluster', additionalID: undefined });
  expect(parseARN('arn:aws:dynamodb:us-east-1:990462195964:table/transaction')).toEqual({ service: 'dynamodb', region: 'us-east-1', accountID: '990462195964', resourceType: 'table', resourceID: 'transaction', additionalID: undefined });
  expect(parseARN('arn:aws:ec2::492602385156:instance/i-16953655c36650e6e5')).toEqual({ service: 'ec2', region: undefined, accountID: '492602385156', resourceType: 'instance', resourceID: 'i-16953655c36650e6e5', additionalID: undefined });
  expect(parseARN('arn:aws:iam::996013154526:role/aws-service-role/cloud9.amazonaws.com/AWSServiceRoleForAWSCloud9')).toEqual({ service: 'iam', region: undefined, accountID: '996013154526', resourceType: 'role', resourceID: 'aws-service-role', additionalID: 'cloud9.amazonaws.com/AWSServiceRoleForAWSCloud9' });
  expect(parseARN('arn:aws:iam::432606950486:role/StartInstances')).toEqual({ service: 'iam', region: undefined, accountID: '432606950486', resourceType: 'role', resourceID: 'StartInstances', additionalID: undefined });
  expect(parseARN('arn:aws:sns:us-east-2:935261657726:transaction-topic')).toEqual({ service: 'sns', region: 'us-east-2', accountID: '935261657726', resourceType: undefined, resourceID: 'transaction-topic', additionalID: undefined });
  expect(parseARN('arn:aws:cloudformation:us-east-2:681873453507:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786')).toEqual({ service: 'cloudformation', region: 'us-east-2', accountID: '681873453507', resourceType: 'stack', resourceID: 'mystack-mynestedstack-sggfrhxhum7w', additionalID: 'f449b250-b969-11e0-a185-5081d0136786' });
  expect(parseARN('arn:aws:secretsmanager:us-east-1:817153889774:secret:mysecret-eb6d01')).toEqual({ service: 'secretsmanager', region: 'us-east-1', accountID: '817153889774', resourceType: 'secret', resourceID: 'mysecret-eb6d01', additionalID: undefined });
  expect(parseARN('arn:aws:ecs:us-west-2:824794197207:task-definition/sample-fargate:2')).toEqual({ service: 'ecs', region: 'us-west-2', accountID: '824794197207', resourceType: 'task-definition', resourceID: 'sample-fargate', additionalID: '2' });
  expect(parseARN('arn:aws:ecs:us-west-2:569245959815:task-definition/sample-fargate')).toEqual({ service: 'ecs', region: 'us-west-2', accountID: '569245959815', resourceType: 'task-definition', resourceID: 'sample-fargate' });
  expect(parseARN('arn:aws:iam::aws:policy/job-function/ViewOnlyAccess')).toEqual({ service: 'iam', region: undefined, accountID: 'aws', resourceType: 'policy', resourceID: 'job-function', additionalID: 'ViewOnlyAccess' });
  expect(parseARN('arn:aws:iam::aws:policy/aws-service-role/AccessAnalyzerServiceRolePolicy')).toEqual({ service: 'iam', region: undefined, accountID: 'aws', resourceType: 'policy', resourceID: 'aws-service-role', additionalID: 'AccessAnalyzerServiceRolePolicy' });
});
