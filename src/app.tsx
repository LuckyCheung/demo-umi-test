import React from 'react';
import { AppLayout } from '@/layouts';
import { useModel } from 'umi';
import type { RunTimeLayoutConfig } from 'umi';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';

export function rootContainer(container: any, { routes }: any) {
  return <AppLayout routes={routes}>{container}</AppLayout>;
}

// export const layout: RunTimeLayoutConfig = ({}): BasicLayoutProps => {
//   return {
//     rightContentRender: () => <RightContent />,
//     footerRender: () => <Footer />,
//     onPageChange: () => {
//       const { currentUser } = initialState;
//       const { location } = history;
//       // 如果没有登录，重定向到 login
//       if (!currentUser && location.pathname !== '/user/login') {
//         history.push('/user/login');
//       }
//     },
//     menuHeaderRender: undefined,
//     ...initialState?.settings,
//   };
// };
