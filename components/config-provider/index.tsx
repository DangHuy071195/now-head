import { ConfigProvider } from 'antd';
import React, { ReactNode } from 'react';
import { App as AntdApp } from 'antd';

interface MainConfigProviderI {
  children: ReactNode;
  config?: any;
}
const MainConfigProvider: React.FC<MainConfigProviderI> = ({ children, config }) => {
  return (
    <ConfigProvider
      prefixCls="itto-kid"
      theme={{
        token: {
          // colorPrimary: '#0d1117',
          borderRadius: 4,
          fontSize: 12,
          // colorBgSpotlight: '#0d1117',
          colorTextBase: '#2323223',
        },
        components: {
          Alert: {
            defaultPadding: '8px 12px',
          },
          ...config,
        },
      }}>
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
};

export default MainConfigProvider;
