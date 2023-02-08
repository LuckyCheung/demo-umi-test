import React, { useState } from 'react';
import { IRouteComponentProps } from 'umi';
import type { ProSettings } from '@ant-design/pro-layout';
import { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from '@/store';

export const AppProvider: React.FC = ({ children }) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
    fixSiderbar: true,
  });
  return (
    <ConfigProvider csp={{ nonce: 'YourNonceCode' }}>
      <Provider store={store}>
        {children}
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
    </ConfigProvider>
  );
};

const Layout: React.FC<IRouteComponentProps> = ({ children }) => {
  return (
    <div id="base-layout">
      <PageContainer fixedHeader>{children}</PageContainer>
    </div>
  );
};

export default Layout;
