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
  expect(getServiceFromResourceType('task')).toBe('ecs');
  expect(getServiceFromResourceType('vaults')).toBe('glacier');
});

test('Test parseARN parses ARNs correctly', () => {
  expect(parseARN('arn:aws:ec2:us-east-1:670694375973:vpc/vpc-55812d40')).toEqual({ service: 'ec2', region: 'us-east-1', accountID: '670694375973', resourceType: 'vpc', resourceID: 'vpc-55812d40', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:ap-southeast-1:492602385156:instance/i-16953655c36650e6e5')).toEqual({ service: 'ec2', region: 'ap-southeast-1', accountID: '492602385156', resourceType: 'instance', resourceID: 'i-16953655c36650e6e5', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:ap-east-1:476697839285:security-group/sg-3a0c1ce9')).toEqual({ service: 'ec2', region: 'ap-east-1', accountID: '476697839285', resourceType: 'security-group', resourceID: 'sg-3a0c1ce9', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:ap-southeast-2:789154120671:transit-gateway/tgw-5ba6cd7bcdc8f50e0e')).toEqual({ service: 'ec2', region: 'ap-southeast-2', accountID: '789154120671', resourceType: 'transit-gateway', resourceID: 'tgw-5ba6cd7bcdc8f50e0e', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:us-east-1:298236065482:dhcp-options/dopt-e324090f')).toEqual({ service: 'ec2', region: 'us-east-1', accountID: '298236065482', resourceType: 'dhcp-options', resourceID: 'dopt-e324090f', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:us-west-1:585972740969:internet-gateway/igw-d9e60216')).toEqual({ service: 'ec2', region: 'us-west-1', accountID: '585972740969', resourceType: 'internet-gateway', resourceID: 'igw-d9e60216', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:ap-southeast-2:343494070974:network-acl/nacl-a348b173')).toEqual({ service: 'ec2', region: 'ap-southeast-2', accountID: '343494070974', resourceType: 'network-acl', resourceID: 'nacl-a348b173', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:ap-southeast-2:693047813182:subnet/subnet-ee03bef8')).toEqual({ service: 'ec2', region: 'ap-southeast-2', accountID: '693047813182', resourceType: 'subnet', resourceID: 'subnet-ee03bef8', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:us-east-2:549280733447:route-table/rtb-94164c5a')).toEqual({ service: 'ec2', region: 'us-east-2', accountID: '549280733447', resourceType: 'route-table', resourceID: 'rtb-94164c5a', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:us-west-2:704955843296:network-interface/eni-96c6052c7d1a3c60b3')).toEqual({ service: 'ec2', region: 'us-west-2', accountID: '704955843296', resourceType: 'network-interface', resourceID: 'eni-96c6052c7d1a3c60b3', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:ap-south-1:737177644411:volume/vol-e1c07e209748c44b82')).toEqual({ service: 'ec2', region: 'ap-south-1', accountID: '737177644411', resourceType: 'volume', resourceID: 'vol-e1c07e209748c44b82', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:us-west-1:218596623884:key-pair/key-4bdfefb8a59bb3e112')).toEqual({ service: 'ec2', region: 'us-west-1', accountID: '218596623884', resourceType: 'key-pair', resourceID: 'key-4bdfefb8a59bb3e112', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:ap-southeast-1:455077652758:image/ami-0fa7fd46f86bd32814')).toEqual({ service: 'ec2', region: 'ap-southeast-1', accountID: '455077652758', resourceType: 'image', resourceID: 'ami-0fa7fd46f86bd32814', additionalID: undefined });
  expect(parseARN('arn:aws:s3:::test-bucket')).toEqual({ service: 's3', region: undefined, accountID: "", resourceType: undefined, resourceID: 'test-bucket' });
  expect(parseARN('arn:aws:codebuild:us-east-2:657019670717:project/test-project')).toEqual({ service: 'codebuild', region: 'us-east-2', accountID: '657019670717', resourceType: 'project', resourceID: 'test-project' });
  expect(parseARN('arn:aws:lambda:ap-southeast-1:510103821772:function:getPrice')).toEqual({ service: 'lambda', region: 'ap-southeast-1', accountID: '510103821772', resourceType: 'function', resourceID: 'getPrice' });
  expect(parseARN('arn:aws:events:ap-east-1:951054313879:rule/refresh-schedule')).toEqual({ service: 'events', region: 'ap-east-1', accountID: '951054313879', resourceType: 'rule', resourceID: 'refresh-schedule' });
  expect(parseARN('arn:aws:logs:ap-southeast-2:752103021208:log-group:vpc-flow-logs:*')).toEqual({ service: 'logs', region: 'ap-southeast-2', accountID: '752103021208', resourceType: 'log-group', resourceID: 'vpc-flow-logs' });
  expect(parseARN('arn:aws:cloudformation:ap-southeast-2:184849109691:stack/service-stack/082784ef-7108-468e-bc86-280f4139ad1b')).toEqual({ service: 'cloudformation', region: 'ap-southeast-2', accountID: '184849109691', resourceType: 'stack', resourceID: 'service-stack', additionalID: '082784ef-7108-468e-bc86-280f4139ad1b' });
  expect(parseARN('arn:aws:ec2:us-east-1:372033604900:transit-gateway-route-table/tgw-rtb-2717cee2b998ad5c78')).toEqual({ service: 'ec2', region: 'us-east-1', accountID: '372033604900', resourceType: 'transit-gateway-route-table', resourceID: 'tgw-rtb-2717cee2b998ad5c78', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:us-west-1:976402213472:vpn-gateway/vgw-558b38748834d935a2')).toEqual({ service: 'ec2', region: 'us-west-1', accountID: '976402213472', resourceType: 'vpn-gateway', resourceID: 'vgw-558b38748834d935a2', additionalID: undefined });
  expect(parseARN('arn:aws:ecs:ap-southeast-2:469186273004:cluster/service-cluster')).toEqual({ service: 'ecs', region: 'ap-southeast-2', accountID: '469186273004', resourceType: 'cluster', resourceID: 'service-cluster', additionalID: undefined });
  expect(parseARN('arn:aws:dynamodb:us-east-1:990462195964:table/transaction')).toEqual({ service: 'dynamodb', region: 'us-east-1', accountID: '990462195964', resourceType: 'table', resourceID: 'transaction', additionalID: undefined });
  expect(parseARN('arn:aws:iam::996013154526:role/aws-service-role/cloud9.amazonaws.com/AWSServiceRoleForAWSCloud9')).toEqual({ service: 'iam', region: undefined, accountID: '996013154526', resourceType: 'role', resourceID: 'aws-service-role', additionalID: 'cloud9.amazonaws.com/AWSServiceRoleForAWSCloud9' });
  expect(parseARN('arn:aws:iam::432606950486:role/StartInstances')).toEqual({ service: 'iam', region: undefined, accountID: '432606950486', resourceType: 'role', resourceID: 'StartInstances', additionalID: undefined });
  expect(parseARN('arn:aws:sns:us-east-2:935261657726:transaction-topic')).toEqual({ service: 'sns', region: 'us-east-2', accountID: '935261657726', resourceType: undefined, resourceID: 'transaction-topic', additionalID: undefined });
  expect(parseARN('arn:aws:cloudformation:us-east-2:681873453507:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786')).toEqual({ service: 'cloudformation', region: 'us-east-2', accountID: '681873453507', resourceType: 'stack', resourceID: 'mystack-mynestedstack-sggfrhxhum7w', additionalID: 'f449b250-b969-11e0-a185-5081d0136786' });
  expect(parseARN('arn:aws:secretsmanager:us-east-1:817153889774:secret:mysecret-eb6d01')).toEqual({ service: 'secretsmanager', region: 'us-east-1', accountID: '817153889774', resourceType: 'secret', resourceID: 'mysecret-eb6d01', additionalID: undefined });
  expect(parseARN('arn:aws:ecs:us-west-2:824794197207:task-definition/sample-fargate:2')).toEqual({ service: 'ecs', region: 'us-west-2', accountID: '824794197207', resourceType: 'task-definition', resourceID: 'sample-fargate', additionalID: '2' });
  expect(parseARN('arn:aws:ecs:us-west-1:569245959815:task-definition/sample-fargate')).toEqual({ service: 'ecs', region: 'us-west-1', accountID: '569245959815', resourceType: 'task-definition', resourceID: 'sample-fargate' });
  expect(parseARN('arn:aws:iam::aws:policy/job-function/ViewOnlyAccess')).toEqual({ service: 'iam', region: undefined, accountID: 'aws', resourceType: 'policy', resourceID: 'job-function', additionalID: 'ViewOnlyAccess' });
  expect(parseARN('arn:aws:iam::aws:policy/aws-service-role/AccessAnalyzerServiceRolePolicy')).toEqual({ service: 'iam', region: undefined, accountID: 'aws', resourceType: 'policy', resourceID: 'aws-service-role', additionalID: 'AccessAnalyzerServiceRolePolicy' });
  expect(parseARN('arn:aws:ec2:ap-southeast-2:280837728446:transitgateway-route-table/tgw-rtb-0139ea58e6598c8f0c')).toEqual({ service: 'ec2', region: 'ap-southeast-2', accountID: '280837728446', resourceType: 'transitgateway-route-table', resourceID: 'tgw-rtb-0139ea58e6598c8f0c', additionalID: undefined });
  expect(parseARN('arn:aws:ec2:ap-southeast-2:184965439876:transit-gatewayattachment/tgw-attach-515b0ec6d25f0b6151')).toEqual({ service: 'ec2', region: 'ap-southeast-2', accountID: '184965439876', resourceType: 'transit-gatewayattachment', resourceID: 'tgw-attach-515b0ec6d25f0b6151', additionalID: undefined });
  expect(parseARN('arn:aws:codecommit:ap-southeast-2:426730285057:setup')).toEqual({ service: 'codecommit', region: 'ap-southeast-2', accountID: '426730285057', resourceType: undefined, resourceID: 'setup', additionalID: undefined });
  expect(parseARN('arn:aws:iam::432606950486:role/path/StartInstances')).toEqual({ service: 'iam', region: undefined, accountID: '432606950486', resourceType: 'role', resourceID: 'path', additionalID: 'StartInstances' });
  expect(parseARN('arn:aws:iam::432606950486:role/path/to/StartInstances')).toEqual({ service: 'iam', region: undefined, accountID: '432606950486', resourceType: 'role', resourceID: 'path', additionalID: 'to/StartInstances' });
  expect(parseARN('arn:aws:ecs:ap-southeast-1:266543935380:task/test-stack-cluster/b8a41f45f3626793dca5e1edf545c58c')).toEqual({ service: 'ecs', region: 'ap-southeast-1', accountID: '266543935380', resourceType: 'task', resourceID: 'test-stack-cluster', additionalID: 'b8a41f45f3626793dca5e1edf545c58c' });
  expect(parseARN('arn:aws:glacier:ap-southeast-2:574166373309:vaults/Music')).toEqual({ service: 'glacier', region: 'ap-southeast-2', accountID: '574166373309', resourceType: 'vaults', resourceID: 'Music', additionalID: undefined });
});

test('Test getNewURLFromResourceID returns correct URL', () => {
  expect(getNewURLFromResourceID('tgw-attach-39cef96504dbdc969c', 'ap-southeast-2')).toBe('https://ap-southeast-2.console.aws.amazon.com/vpc/home?region=ap-southeast-2#TransitGatewayAttachments:transitGatewayAttachmentId=tgw-attach-39cef96504dbdc969c;sort=transitGatewayAttachmentId');
  expect(getNewURLFromResourceID('tgw-rtb-131fc21c22f0fdd6e3', 'ap-southeast-2')).toBe('https://ap-southeast-2.console.aws.amazon.com/vpc/home?region=ap-southeast-2#TransitGatewayRouteTables:transitGatewayRouteTableId=tgw-rtb-131fc21c22f0fdd6e3;sort=transitGatewayRouteTableId');
});

test('Test getNewURLFromResourceType returns correct URL', () => {
  expect(getNewURLFromResourceType('ec2', 'ap-southeast-2', '868903843376', 'transit-gatewayattachment', 'tgw-attach-39cef96504dbdc969c', undefined)).toBe('https://ap-southeast-2.console.aws.amazon.com/vpc/home?region=ap-southeast-2#TransitGatewayAttachments:transitGatewayAttachmentId=tgw-attach-39cef96504dbdc969c;sort=transitGatewayAttachmentId');
  expect(getNewURLFromResourceType('ec2', 'ap-southeast-2', '238527645814', 'transitgateway-route-table', 'tgw-rtb-131fc21c22f0fdd6e3', undefined)).toBe('https://ap-southeast-2.console.aws.amazon.com/vpc/home?region=ap-southeast-2#TransitGatewayRouteTables:transitGatewayRouteTableId=tgw-rtb-131fc21c22f0fdd6e3;sort=transitGatewayRouteTableId');
  expect(getNewURLFromResourceType('codecommit', 'ap-southeast-2', '426730285057', undefined, 'setup', undefined)).toBe('https://ap-southeast-2.console.aws.amazon.com/codesuite/codecommit/repositories/setup/browse?region=ap-southeast-2');
  expect(getNewURLFromResourceType('iam', 'ap-southeast-2', '426730285057', 'role', 'path', 'to/StartInstances')).toBe('https://console.aws.amazon.com/iam/home?region=ap-southeast-2#/roles/StartInstances');
  expect(getNewURLFromResourceType('iam', 'ap-southeast-2', '426730285057', 'role', 'path', 'StartInstances')).toBe('https://console.aws.amazon.com/iam/home?region=ap-southeast-2#/roles/StartInstances');
  expect(getNewURLFromResourceType('iam', undefined, '996013154526', 'role', 'aws-service-role', 'cloud9.amazonaws.com/AWSServiceRoleForAWSCloud9')).toBe('https://console.aws.amazon.com/iam/home?region=undefined#/roles/AWSServiceRoleForAWSCloud9');
  expect(getNewURLFromResourceType('iam', undefined, '432606950486', 'role', 'StartInstances')).toBe('https://console.aws.amazon.com/iam/home?region=undefined#/roles/StartInstances');
  expect(getNewURLFromResourceType('iam', undefined, 'aws', 'policy', 'job-function', 'ViewOnlyAccess')).toBe('https://console.aws.amazon.com/iam/home?region=undefined#/policies/arn:aws:iam::aws:policy/job-function/ViewOnlyAccess$serviceLevelSummary');
  expect(getNewURLFromResourceType('iam', undefined, 'aws', 'policy', 'aws-service-role', 'AccessAnalyzerServiceRolePolicy')).toBe('https://console.aws.amazon.com/iam/home?region=undefined#/policies/arn:aws:iam::aws:policy/aws-service-role/AccessAnalyzerServiceRolePolicy$jsonEditor');
  expect(getNewURLFromResourceType('ecs', 'ap-southeast-1', '266543935380', 'task', 'test-stack-cluster', 'b8a41f45f3626793dca5e1edf545c58c')).toBe('https://ap-southeast-1.console.aws.amazon.com/ecs/home?region=ap-southeast-1#/clusters/test-stack-cluster/tasks/b8a41f45f3626793dca5e1edf545c58c');
  expect(getNewURLFromResourceType('glacier', 'ap-southeast-2', '574166373309', 'vault', 'MoneyBin', undefined)).toBe('https://ap-southeast-2.console.aws.amazon.com/glacier/home?region=ap-southeast-2#/vaults');
  expect(getNewURLFromResourceType('cloudformation', 'ap-southeast-2', '184849109691', 'stack', 'service-stack', '082784ef-7108-468e-bc86-280f4139ad1b')).toBe('https://ap-southeast-2.console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks/stackinfo?stackId=arn%3Aaws%3Acloudformation%3Aap-southeast-2%3A184849109691%3Astack%2Fservice-stack%2F082784ef-7108-468e-bc86-280f4139ad1b&filteringText=service-stack&filteringStatus=active&viewNested=true&hideStacks=false')
  expect(getNewURLFromResourceType('cloudformation', 'ap-southeast-2', undefined, 'stack', 'service-stack')).toBe('https://ap-southeast-2.console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks?filteringStatus=active&filteringText=service-stack&viewNested=true&hideStacks=false&stackId=')
});
