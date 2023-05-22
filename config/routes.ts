import type { IRoute } from '@umijs/types';

const routes: IRoute[] = [
  {
    exact: false,
    path: '/',
    component: '@/layouts/index',
    flatMenu: true,
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
        access: 'home',
      },
      {
        name: '测试',
        path: '/test',
        icon: 'appstore',
        routes: [
          {
            name: 'todo',
            path: '/test/todo/:a',
            component: '@/pages/todo',
            access: 'todo',
          },
          {
            name: 'user',
            path: '/test/user',
            component: '@/pages/user',
            access: 'user',
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
