# Identity service updater

To add or remove the cinch-labs identity service's awareness of subdomains

## Usage

### Adding a subdomain infix

```yaml
- name: Adding an infix
  uses: cinch-labs/update-identity-service@main
  with:
    auth-authority: ${{ secrets.AUTH_AUTHORITY }}
    access-key: ${{ secrets.ACCESS_KEY }}
    subdomain-infix: my-subdomain
    update-type: add # "add" is the default so specifying this is optional
```

### Removing a subdomain infix

```yaml
- name: Adding an infix
  uses: cinch-labs/update-identity-service@main
  with:
    auth-authority: ${{ secrets.AUTH_AUTHORITY }}
    access-key: ${{ secrets.ACCESS_KEY }}
    subdomain-infix: my-subdomain
    update-type: remove
```

## Development

Install the dependencies

```bash
$ yarn
```

Build the typescript and package it for distribution

```bash
$ yarn build && yarn package
```

## Publish

1. Start work on a new branch. If you want to test your changes in a live scenario you can reference your branch's version of the action in the consuming workflow as follows:

```yaml
uses: cinch-labs/update-identity-service@your-branch-name
```

2. When you have finished your work, compile the action for release\* and push those changes:

```bash
  yarn build
  yarn package
```

<sub>\* These two commands are also run automatically as a git pre-commit hook</sub>

3. Open a PR and, when the checks pass, merge it into `main`.

4. Congratulations your changes are now live!
