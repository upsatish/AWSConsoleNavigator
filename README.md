# AWS Console Search

AWS console search browser extension. Search for AWS resources from the Omnibox.
To use, type 'awss' space an AWS resource ID into the Omnibox.
Cick the extension icon to select the search region.

## Supported resources
| Resource type | Resource ID starts with |
| ------------- | ----------------------- |
| VPC | vpc- |
| EC2 instance | i- |
| Security group | sg- |
| Transit gateway | tgw- |
| DHCP Options | dopt- |
| Internet gateway | igw- |
| Network ACL | nacl- |
| Subnet | subnet- |

## Unsupported resources
These resources could not be supported
- Transit gateway attachment (tgw-attach-)
- Codebuild
- DBSecurityGroup
- Cloudwatch events rule

## TODO
- [ ] ARN search
- [ ] Currently tested on Google Chrome - port and test to Firefox
- [ ] Add more searches
- [ ] Search for all TODOs in the project and complete
- [ ] Add tooltip
