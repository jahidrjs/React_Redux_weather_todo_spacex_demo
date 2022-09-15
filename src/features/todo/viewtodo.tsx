import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, Layout, Button } from 'antd';
import Todolist from '../../components/Todolist';
import { todoInterface } from './todoInterface';

const { Content } = Layout;

const viewtodo: any = () => {
  const todos = useSelector((state: any) => state.todosReducer.todos);

  return (
    <>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Todo App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <h2>
            My Todo List{' '}
            <Link to={'/add-todo'}>
              <Button type="primary">+Add</Button>
            </Link>
          </h2>
          <Todolist {...todos} />
        </div>
      </Content>
    </>
  );
};

export default viewtodo;
