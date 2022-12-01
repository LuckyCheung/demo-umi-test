import { defineConfig } from 'umi';
import routes from './routes';
import theme from './theme';

export default defineConfig({
  title: 'react-test',
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  theme,
  fastRefresh: {},
  mfsu: {},
});
