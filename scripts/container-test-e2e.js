const { spawnSync } = require('child_process');

spawnSync('docker', ['build', '--target', 'test-e2e', '.'], {
  stdio: 'inherit',
});
