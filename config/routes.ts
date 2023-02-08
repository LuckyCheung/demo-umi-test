import type { IRoute } from '@umijs/types';

const routes: IRoute[] = [
  {
    exact: false,
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        name: '首页',
        path: '/home',
        icon: 'appstore',
        component: '@/pages/index',
      },
      {
        name: '测试',
        path: '/test',
        icon: 'edit',
        routes: [
          {
            name: 'todo',
            path: '/test/todo',
            component: '@/pages/todo',
          },
        ],
      },
      {
        component: '@/pages/404',
      },
    ],
  },
];

export default routes;
