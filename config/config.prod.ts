import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env': {
      MY_ENV: process.env.NODE_ENV,
    },
  },
});
