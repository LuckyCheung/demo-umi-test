import { AppLayout } from '@/layouts';
import { useModel } from 'umi';
import type { RunTimeLayoutConfig } from 'umi';

export const rootContainer = (container: any, { routes }: any) => {
  return <AppLayout routes={routes}>{container}</AppLayout>;
};

export const layout: RunTimeLayoutConfig = (initialState) => {
  return {
    //   onPageChange: () => {
    //     const { currentUser } = initialState;
    //     const { location } = history;
    //     // 如果没有登录，重定向到 login
    //     if (!currentUser && location.pathname !== '/user/login') {
    //       history.push('/user/login');
    //     }
    //   },
    //   menuHeaderRender: undefined,
    //   ...initialState?.settings,
  };
};

export const getInitialState = async () => {
  // const data = await fetchXXX();
  // return data;
};
