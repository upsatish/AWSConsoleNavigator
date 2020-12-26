# AWS Console Navigator

AWS Console Navigator Chrome extension. Navigate to AWS resources in the console from the Omnibox.
To use, type 'awss' space an AWS resource ID, ARN or service:resourceID (ARN substring) into the Omnibox.

Click the AWS Console Navigator extension icon to select the AWS region.

Sign in to an AWS account to access the AWS management console.

## Supported resources

### Navigate by resource ID or ARN or service:resourceID (ARN substring)

Resources that can be navigated by resource ID or ARN.

| Resource type           | Resource ID starts with |
| ----------------------- | ----------------------- |
| VPC                     | vpc-                    |
| EC2 instance            | i-                      |
| Security group          | sg-                     |
| Transit gateway         | tgw-                    |
| DHCP option             | dopt-                   |
| Internet gateway        | igw-                    |
| Network ACL             | nacl-                   |
| Subnet                  | subnet-                 |
| Route table             | rtb-                    |
| Network interface       | eni-                    |
| Volume                  | vol-                    |
| Key pair                | key-                    |
| AMI                     | ami-                    |
| Virtual private gateway | vgw-                    |

### Navigate by ARN or service:resourceID (ARN substring) only

The following resources can be navigated by ARN or service:resourceID (ARN substring) only.

- S3 bucket
- Codebuild project
- Lambda function
- Cloudwatch events rule
- Cloudwatch log group
- Cloudformation stack
- Secretsmanager secret
- DynamoDB table
- ECS cluster
- ECS task definition
- RDS DB
- SQS queue

#### service:resourceID (ARN substring) example

| ARN                                                                            | service:resourceID (ARN substring)     |
| ------------------------------------------------------------------------------ | -------------------------------------- |
| arn:aws:ecs:ap-southeast-2:330362583003:cluster/prod-pay-service-stack-cluster | cluster/prod-pay-service-stack-cluster |

## Unsupported resources

These resources could not be supported.

- Transit gateway attachment (tgw-attach-)
- DB security group
- KMS key
- Config rule
- SNS topic

## TODO

- [ ] Add CONTRIBUTING.MD
- [ ] Add more supported resources
- [ ] Add unit test for getNewURL functions
- [ ] Currently developed and tested on Google Chrome - port and test to Firefox
- [ ] Search for all TODOs in the project and complete
- [ ] For an unsupported resource, navigate to an unsupported resource or contributing page
- [ ] Update README Navigate by ARN section to a table with service and resource type
- [ ] Run ESLint on source code
- [ ] Add images to README
- [ ] Add JSDoc
- [ ] Organize code and docs by categories - compute, networks, storage, database, etc.
- [ ] Add automated tests to build pipeline
- [ ] Fix cloudformation to describe stack using additional identifier
- [ ] Fix ecs task definition to describe task definition using additional identifier
- [ ] Add international language support / translation
- [ ] Fix VSCode snippets
- [ ] Fix RDS cluster ARN substring lookup
- [ ] Fix SNS navigation Couldn't retrieve topic attributes. Error code: InvalidParameter - Error message: Invalid parameter: AccountId
