import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5174-pedrorivero-cobalttestp-3wft8y08wmj.ws-us120.gitpod.io'],
  },
});