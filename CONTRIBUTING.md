# Contributing

This guide details how to contribute to AWS Console Navigator.

## License

GNU GPLv3 License, see [LICENSE](LICENSE).

## Thank you for contributing

Welcome! Thank you for contributing to AWS Console Navigator. There are several ways to contribute to the project:

- Test and submit bugs or feature requests
- Improve documentation
- There are many AWS resource types that haven't been supported yet. Please submit a feature request and help test.
- Fix bugs or implement feature requests
- Help translate AWS Console Navigator to other languages
- Share AWS Console Navigator with friends

## Issues and pull request

Try to include much detail in issue and pull request titles and descriptions.

### Issues

Create a new issue to report bugs or feature requests. For bugs, please include:

- AWS Console Navigator version
- Browser version
- Operating system
- Steps to reproduce issue
- Screenshots

For new features, please include a detailed description.

### Pull requests

Create a pull request to fix bugs or new features. For pull requests:

- Create an issue
- Branch from develop for features.
- Branch from main for issues, bugs or fixes.

## Dos and don'ts

- To add a resource type, create a new issue for the unsupported resource type
- Create a branch referencing the issue
- Copy an else if block from the functions getNewUrl()
- Add a map set to the getServiceFromResourceType function
- Replace the URL with the new console URL of the resource from your browser
- If the region is US East (N. Virginia) us-east-1, ensure that the console URL includes the region https://${region}.console.aws.amazon.com/
- Substitute the region with the ${region} tag
- Substitute the resource ID with the ${text} tag
- DO add the resource type as a comment
- DO update the readme
- DO test the resource ID nav

Test
