# Contributing

This doc details how to contribute to AWS Console Navigator.

## Thank you for contributing

Welcome! Thank you for contributing to AWS Console Navigator. There are several ways to contribute to the project:

- Test and submit issues, bug reports or feature requests
- Improve documentation
- There are many AWS resource types that haven't been implemented yet. Please submit a feature request and help implement and / or test.
- Submit a pull request to fix bugs or implement feature requests
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

For new features, please include a detailed description with details of the service, resource type, console URL, ARN and any other detail.

### Pull requests

Create a pull request to fix bugs or new features. For pull requests:

- Create an issue with details of the bug or new feature
- Branch from main for issues, bugs or fixes
- Include testing steps and expected results
- Update README if required

## Releases

The project is using GitHub Actions workflows to create releases, using semantic versioning. The version numbers are updated in manifest.json, .github/workflows/main.yml and package.json for releases. The release notes are updated in .github/workflows/main.yml.

## Tests

The project is using GitHub Actions workflows to run unit tests on lib.js using [Jest](https://jestjs.io/). Test are run automatically on every commit. Please use random 12-digit numbers for account IDs and 8-digit or 18-digit hex in lowercase for resource IDs.

## Adding a new resource type

To add a new resource type:

- Create a new GitHub issue for the unsupported resource type with details of the service, resource type, console URL, ARN and any other detail. Add the labels "enhancement".
- Update README.md for supported resources
- Add tests to lib.test.js
- In lib.js, add a comment for the service and resource type, example // Cloudformation stack
- Add a new else if block to the getNewURLFromResourceType() function with the service and resourceType from the ARN
- Return the URL to the console URL for that resource
- Substitute the region with the ${region} tag
- Substitute the resource ID with the ${resourceID} tag - there are additional tags available if required
- Add a new else if block to the getNewURLFromResourceID() function if required
- Do the necessary region and resourceID substitutions as above
- Add a map set to the getServiceFromResourceType() function for the service:resourceID (ARN substring) navigation
- Test navigation by ARN, resourceID and ARN substring in browser
- Create and submit pull request referencing issue #

## TODO

- [ ] Search for all TODOs in the project and code and complete
- [ ] For an unsupported resource, navigate to contributing page if new tab, do not do for existing tab
- [ ] Update README Navigate by ARN section to a table with service and resource type
- [ ] Run ESLint on source code
- [ ] Add JSDoc
- [ ] Organize code and docs by categories - compute, networks, storage, database, etc. Currently is arbitrary
- [ ] Add international language support / translation
- [ ] Fix VSCode snippets
- [ ] Fix RDS cluster ARN substring map
- [ ] Any fix for EC2 snapshot ARN navigation? Currently defaults to snapshots "Owned by me", can't view public
- [ ] Add more supported resources
- [ ] Add automated tests of extension - puppeteer, selenium?
