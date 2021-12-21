const { spawnSync } = require('child_process');

spawnSync('docker', ['build', '--target', 'test-functional', '.'], {
  stdio: 'inherit',
});
