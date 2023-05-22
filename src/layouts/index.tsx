import React, { useState } from 'react';
import { IRouteComponentProps } from 'umi';
import type { ProSettings } from '@ant-design/pro-layout';
import { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import { Provider } from 'react-redux';
import store from '@/store';
import styles from './index.less';

export const AppLayout: React.FC<any> = (props) => {
  const { children, routes } = props;
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
    fixSiderbar: true,
  });

  return (
    <Provider store={store}>
      {React.cloneElement(children, {
        ...children!.props,
        routes,
      })}
      <SettingDrawer
        enableDarkTheme
        getContainer={() => document.getElementById('base-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </Provider>
  );
};

export const PageLayout: React.FC<IRouteComponentProps> = (props) => {
  return (
    <div id="base-layout" className={styles['base-layout']}>
      <PageContainer fixedHeader>{props.children}</PageContainer>
      <div className={styles['layout-footer']}></div>
    </div>
  );
};

export default PageLayout;
