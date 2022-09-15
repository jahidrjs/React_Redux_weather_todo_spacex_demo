import React from 'react';
import { Breadcrumb, Layout, Row, Col, Avatar, Card } from 'antd';
const { Meta } = Card;
import profile from '../../public/profile.png';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Content } = Layout;

const Home: any = () => {
  return (
    <>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Row gutter={[8, 8]}>
            <Col span={6}>
              {' '}
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://avatars.githubusercontent.com/u/5246589?v=4"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="Jahid Al Mamun"
                  description="Sr. Web Application Developer (Lead)"
                />
              </Card>
            </Col>
            <Col span={18}>Some project related details</Col>
          </Row>
        </div>
      </Content>
    </>
  );
};
export default Home;
