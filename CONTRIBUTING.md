# Contributing

This guide details how to contribute to AWS Console Navigator.

## License

GNU GPLv3 License, see [LICENSE](LICENSE).

## Thank you for contributing

Welcome! Thank you for contributing to AWS Console Navigator. There are several ways to contribute to the project:

- Test and submit issues, bug reports or feature requests
- Improve documentation
- There are many AWS resource types that haven't been supported yet. Please submit a feature request and help test.
- Fix bugs or implement feature requests
- Help translate AWS Console Navigator to other languages
- Share AWS Console Navigator with friends
- See TODO list below for ideas
- Any contribution is welcome!

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

- Create an issue with details of the bug or new feature
- Branch from develop for features
- Branch from main for issues, bugs or fixes
- Include testing steps and expected results
- Update README if required

## Adding a new resource type

To add a new resource type:

- Create a new issue for the unsupported resource type with details of the service, resource type, console URL, ARN and any other detail.
- Update README for supported resources
- Add a comment for the service and resource type, example // Cloudformation stack
- Add a new else if block to the getNewURLFromResourceType() function with the service and resourceType from the ARN
- Return the URL to the console URL for that resource
- Substitute the region with the ${region} tag
- Substitute the resource ID with the ${resourceID} tag - there are additional tags available if required
- Add a new else if block to the getNewURLFromResourceID() function if required
- Do the necessary region and resourceID substitutions as above
- Add a map set to the getServiceFromResourceType() function for the service:resourceID (ARN substring) navigation
- Test navigation by ARN, resourceID and ARN substring
- Create and submit pull request referencing issue

## TODO

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
- [ ] Add international language support / translation
- [ ] Fix VSCode snippets
- [ ] Fix RDS cluster ARN substring map
- [ ] Add EC2 snapshot ARN navigation
- [ ] Add more supported resources
