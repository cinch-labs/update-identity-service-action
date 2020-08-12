module.exports = {
  '*.ts': ['eslint --fix', 'npm run build && npm run package'],
  '**/*.ts': () => 'tsc -p tsconfig.json --noEmit',
  '*.{ts,json,md,yml}': ['prettier --write'],
}
