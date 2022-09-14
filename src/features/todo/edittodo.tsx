import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateTodo } from './TodoSlice';
const { v4: uuidv4 } = require('uuid');
import { Breadcrumb, Layout } from 'antd';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
const { Option } = Select;

const { Content } = Layout;

const updatetodo: any = () => {
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const location: any = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    dispatch(updateTodo({ id, title, description }));
    navigate('/view-todo', { replace: true });
  };

  return (
    <>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Add Todo</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={handleSubmit}
          >
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="description"
              label="Details"
              rules={[{ required: false }]}
            >
              <Input
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Link to={'/view-todo'}>
                <Button danger type="primary">
                  Cancel
                </Button>
              </Link>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </>
  );
};

export default updatetodo;
