module.exports = {
  '*.ts': ['eslint --fix'],
  '**/*.ts': () => 'tsc -p tsconfig.json --noEmit',
  '*.{ts,json,md,yml}': ['prettier --write'],
}
