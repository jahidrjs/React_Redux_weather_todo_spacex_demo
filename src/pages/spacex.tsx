import React from 'react';
import { Breadcrumb, Layout } from 'antd';

const { Content } = Layout;

const spacex: any = () => {
  return (
    <>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>SpaceX Page</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          Content
        </div>
      </Content>
    </>
  );
};

export default spacex;
