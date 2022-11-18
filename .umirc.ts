import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: { name: 'Umi Test', siderWidth: 180 },
  routes: [
    {
      name: '首页',
      icon: 'AppstoreOutlined',
      path: '/',
      component: '@/pages/index',
    },
    {
      name: '测试',
      path: '/test',
      icon: 'AppstoreOutlined',
      routes: [
        {
          name: 'todo',
          path: '/test/todo',
          component: '@/pages/todo',
        },
      ],
    },
  ],
  fastRefresh: {},
});
