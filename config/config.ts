import { defineConfig } from 'umi';
import routes from './routes';
import theme from './theme';

export default defineConfig({
  title: 'Umi Test',
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  theme,
  fastRefresh: {},
  mock: false,
  mfsu: {},
  layout: {
    name: 'Umi Test',
    siderWidth: 208,
  },
  request: {
    dataField: 'data',
  },
});
