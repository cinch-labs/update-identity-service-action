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
    subdomain-infix: my-branch-name
    update-type: add # "add" is the default so specifying this is optional
```

### Removing a subdomain infix

```yaml
- name: Adding an infix
  uses: cinch-labs/update-identity-service@latest
  with:
    auth-authority: ${{ secrets.AUTH_AUTHORITY }}
    access-key: ${{ secrets.ACCESS_KEY }}
    subdomain-infix: my-branch-name
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

Create a GitHub release either by creating a tag for it locally or in the UI
