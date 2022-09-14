import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo } from './TodoSlice';
const { v4: uuidv4 } = require('uuid');
import { Breadcrumb, Layout } from 'antd';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
const { Option } = Select;

const { Content } = Layout;

const addtodo: any = () => {
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    const todo = {
      id: uuidv4(),
      title: title,
      description: description,
    };

    dispatch(addTodo(todo));
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
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </>
  );
};

export default addtodo;
