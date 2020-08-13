# Identity service updater

To add or remove the cinch-labs identity service's awareness of subdomains

## Usage

### Adding a subdomain infix

```yaml
- name: Adding an infix
  uses: cinch-labs/update-identity-service@latest
  with:
    auth-authority: ${{ secrets.AUTH_AUTHORITY }}
    access-key: ${{ secrets.ACCESS_KEY }}
    subdomain-infix: my-subdomain
    update-type: add # "add" is the default so specifying this is optional
```

### Removing a subdomain infix

```yaml
- name: Adding an infix
  uses: cinch-labs/update-identity-service@latest
  with:
    auth-authority: ${{ secrets.AUTH_AUTHORITY }}
    access-key: ${{ secrets.ACCESS_KEY }}
    subdomain-infix: my-subdomain
    update-type: remove
```

## Development

Install the dependencies

```bash
$ npm install
```

Build the typescript and package it for distribution

```bash
$ npm run build && npm run package
```

## Publish

1. Start work on a new branch and submit a PR

2. When PR checks have passed, compile the action for release\*:

```bash
  npm run build
  npm run package
```

<sub>\* These two commands are also run automatically as a git pre-commit hook</sub>

3. Publish release using `standard-version` according to [semver](https://semver.org/):

```bash
  npm run release-major # For a major release
  npm run release-minor # For a minor release
  npm run release-patch # For a patch release
```

4. Push your release tags with `git push --follow-tags`
5. Merge you PR into master
