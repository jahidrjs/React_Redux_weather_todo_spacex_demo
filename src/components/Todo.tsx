import React from 'react';
import { Card, Col, Row, Tooltip, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Todo = (tododata: any) => {
  return (
    <Col span={4}>
      <Card hoverable title="some are">
        <p>Card content</p>
        <Tooltip title="Edit">
          <Button type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip>
        <Tooltip title="Delete">
          <Button
            type="primary"
            danger
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </Tooltip>
      </Card>
    </Col>
  );
};

export default Todo;
