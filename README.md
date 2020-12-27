# AWS Console Navigator

AWS Console Navigator Chrome extension. Navigate to AWS resources in the console from the Omnibox.
To use, type keyword 'awss' space an ARN, AWS resource ID or service:resourceID (ARN substring) into the Omnibox.

Sign in to an AWS account is required to access the AWS management console.

![Image of user typing awss keyword and ARN into the Omnibox](img/awssKeywordOmnibox.png "Image of user typing awss keyword and ARN into the Omnibox")

![Image of the AWS Console Navigator extension](img/AWSConsoleNavigatorExtension.png "Image of the AWS Console Navigator extension")

![Image of an AWS resource in the console](img/AWSConsoleNavigated.png "Image of an AWS resource in the console")

Click the AWS Console Navigator extension icon to select the AWS region for navigation by resource ID. The selected region is displayed as an Omnibox suggestion.

![Image of AWS Console Navigator region selection popup](img/SelectRegionPopup.png "Image of AWS Console Navigator region selection popup")

## Supported resources

### Navigate by resource ID or ARN or service:resourceID (ARN substring)

Resources that can be navigated by resource ID or ARN or service:resourceID (ARN substring):

- VPC
- EC2 instance
- Security group
- Transit gateway
- DHCP option
- Internet gateway
- Network ACL
- Subnet
- Route table
- Network interface
- Volume
- Key pair
- AMI
- Virtual private gateway

### Navigate by ARN or service:resourceID (ARN substring) only

Resources that can be navigated by ARN or service:resourceID (ARN substring) only:

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
- SNS topic
- State machine state
- RDS cluster can be navigated by ARN only

#### service:resourceID (ARN substring) format examples

Examples of the service:resourceID (ARN substring) format:

| ARN                                                             | service:resourceID (ARN substring) |
| --------------------------------------------------------------- | ---------------------------------- |
| arn:aws:ecs:ap-southeast-2:333173657890:cluster/service-cluster | cluster/service-cluster            |
| arn:aws:dynamodb:us-east-1:206936434116:table/transaction       | table/transaction                  |

## Unsupported resources

These resources could not be supported:

- Transit gateway attachment (tgw-attach-)
- DB security group
- KMS key
- Config rule

## Contributing

See [CONTRIBUTING.MD](CONTRIBUTING.MD).
