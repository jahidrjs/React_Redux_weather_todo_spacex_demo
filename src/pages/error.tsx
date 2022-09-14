import React from 'react';
import { Layout } from 'antd';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const error: any = () => {
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
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <Link to={'/'}>
                <Button type="primary">Back Home</Button>
              </Link>
            }
          />
        </div>
      </Content>
    </>
  );
};

export default error;
