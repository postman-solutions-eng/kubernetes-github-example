const path = require('path');
const { fork, spawnSync } = require('child_process');

const collection =
  process.env.POSTMAN_COLLECTION ||
  './postman/collections/GitHub - Kubernetes_8193d0dd-d3e9-4388-8dc3-9afdcbaedc32.json';

const environment =
  process.env.POSTMAN_ENVIRONMENT ||
  './postman/environments/GitHub - Kubernetes Local.postman_environment.json';

const rootPath = path.join(__dirname, '..');
const collectionPath = path.join(rootPath, collection);
const environmentPath = path.join(rootPath, environment);

const server = fork(path.join(rootPath, 'src', 'server.js'), {
  stdio: 'inherit',
  detached: true,
});

const newman = spawnSync(
  './node_modules/.bin/newman',
  ['run', '-e', environmentPath, collectionPath],
  { stdio: 'inherit' }
);

server.kill();
process.exit(newman.status);
