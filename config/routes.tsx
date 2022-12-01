import type { IRoute } from '@umijs/types';
import { AppstoreOutlined } from '@ant-design/icons';

const routes: IRoute[] = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        name: '首页',
        icon: <AppstoreOutlined />,
        path: '/home',
        component: '@/pages/index',
      },
      {
        name: '测试',
        path: '/test',
        icon: <AppstoreOutlined />,
        routes: [
          {
            name: 'todo',
            path: '/test/todo',
            component: '@/pages/todo',
          },
        ],
      },
    ],
  },
];

export default routes;
