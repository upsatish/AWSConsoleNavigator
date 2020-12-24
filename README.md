# AWS Console Navigator

AWS Console Navigator Chrome extension. Navigate to AWS resources in the console from the Omnibox.
To use, type 'awss' space an AWS resource ID into the Omnibox.

Click the AWS Console Navigator extension icon to select the AWS region.

Sign in to an AWS account to access the AWS management console.

## Supported resources

### Navigate by resource ID

The following resources can be navigated by resource ID.

| Resource type    | Resource ID starts with |
| ---------------- | ----------------------- |
| VPC              | vpc-                    |
| EC2 instance     | i-                      |
| Security group   | sg-                     |
| Transit gateway  | tgw-                    |
| DHCP options     | dopt-                   |
| Internet gateway | igw-                    |
| Network ACL      | nacl-                   |
| Subnet           | subnet-                 |
| Route table      | rtb-                    |

### Navigate by ARN

The following resources can be navigated by ARN.

- S3 bucket
- Codebuild project
- Lambda function
- Cloudwatch events rule

## Unsupported resources

These resources could not be supported

- Transit gateway attachment (tgw-attach-)
- DB security group
- KMS key

## TODO

- [ ] Add CONTRIBUTING.MD
- [ ] Create ARN navigation for resources supported by ResourceID
- [ ] Add more supported resources
- [ ] Rename github repository to AWS Console Navigator
- [ ] Currently developed and tested on Google Chrome - port and test to Firefox
- [ ] Search for all TODOs in the project and complete
- [ ] For an unsupported resource, navigate to an unsupported resource or contributing page
- [ ] Update README Navigate by ARN section to a table with service and resource type
- [ ] Run ESLint on source code
- [ ] Add images to README
- [ ] Add JSDoc