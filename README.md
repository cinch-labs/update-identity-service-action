<p align="center">
  <a href="https://github.com/cinch-labs/update-identity-service/actions"><img alt="update-identity-service-action status" src="https://github.com/cinch-labs/update-identity-service/workflows/Build%20&%20Test/badge.svg"></a>
</p>

# Identity service updater

To add and delete subdomains from the identity service

## Develop

Install the dependencies

```bash
$ npm install
```

Build the typescript and package it for distribution

```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:

```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```

## Publish

Create a GitHub release either by creating a tag for it locally or in the UI
