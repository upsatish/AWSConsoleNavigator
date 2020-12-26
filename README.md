# AWS Console Navigator

AWS Console Navigator Chrome extension. Navigate to AWS resources in the console from the Omnibox.
To use, type 'awss' space an AWS resource ID, ARN or "service:resourceID" into the Omnibox.

Click the AWS Console Navigator extension icon to select the AWS region.

Sign in to an AWS account to access the AWS management console.

## Supported resources

### Navigate by resource ID or ARN

Resources that can be navigated by resource ID or ARN.

| Resource type     | Resource ID starts with |
| ----------------- | ----------------------- |
| VPC               | vpc-                    |
| EC2 instance      | i-                      |
| Security group    | sg-                     |
| Transit gateway   | tgw-                    |
| DHCP option       | dopt-                   |
| Internet gateway  | igw-                    |
| Network ACL       | nacl-                   |
| Subnet            | subnet-                 |
| Route table       | rtb-                    |
| Network interface | eni-                    |
| Volume            | vol-                    |
| Key pair          | key-                    |
| AMI               | ami-                    |

### Navigate by ARN only

The following resources can be navigated by ARN only.

- S3 bucket
- Codebuild project
- Lambda function
- Cloudwatch events rule
- Cloudwatch log group
- Cloudformation stack
- Secretsmanager secret

## Unsupported resources

These resources could not be supported.

- Transit gateway attachment (tgw-attach-)
- DB security group
- KMS key
- Config rule

## TODO

- [ ] Add CONTRIBUTING.MD
- [ ] Add more supported resources
- [ ] Add support for ARN substring
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
- [ ] Fix cloudformation to describe rather than list stack
- [ ] Add international language support / translation
