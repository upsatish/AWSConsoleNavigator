# AWS Console Search

AWS console search browser extension. Search for AWS resources from the Omnibox.
To use, type 'awss' space an AWS resource ID into the Omnibox.

## Supported resources
| Resource type | Resource ID starts with |
| ------------- | ----------------------- |
| VPC | vpc- |
| EC2 instances | i- |
| Security groups | sg- |
| Transit gateway | tgw- |
| DHCP Options | dopt- |
| Internet gateway | igw- |


## Not supported resources
These resources could not be supported
- Transit gateway attachment (tgw-attach-)
- Codebuild

## TODO
- [ ] ARN search
- [ ] Currently tested on Google Chrome - port and test to Firefox
- [ ] Add more searches
- [ ] Search for all TODOs in the project and complete
- [ ] Add tooltip
