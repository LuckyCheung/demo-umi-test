import React, { useState } from 'react';
import { IRouteComponentProps } from 'umi';
import type { ProSettings } from '@ant-design/pro-layout';
import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-layout';
import { Card } from 'antd';
import { Provider } from 'react-redux';
import store from '@/store';
import routes from '../../config/routes';

const Layout: React.FC<IRouteComponentProps> = (props) => {
  const { children } = props;

  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
    fixSiderbar: true,
  });

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <Provider store={store}>
        <ProLayout title="UMI" siderWidth={216} route={routes[0]} {...settings}>
          <PageContainer fixedHeader>
            <Card>{children}</Card>
          </PageContainer>
        </ProLayout>
        <SettingDrawer
          enableDarkTheme
          getContainer={() => document.getElementById('test-pro-layout')}
          settings={settings}
          onSettingChange={(changeSetting) => {
            setSetting(changeSetting);
          }}
          disableUrlParams={false}
        />
      </Provider>
    </div>
  );
};

export default Layout;
