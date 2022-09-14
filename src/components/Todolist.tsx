import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, addTodo } from '../features/todo/TodoSlice';
import { Card, Col, Row, Tooltip, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Todo from '../components/Todo';
import { todoInterface } from '../features/todo/todoInterface';

const Todolist = (todosData: todoInterface[]) => {
  const todoValues = Object.entries(todosData);
  const dispatch = useDispatch();
  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="site-card-border-less-wrapper">
      <Row gutter={[16, 16]}>
        {todoValues &&
          todoValues.map((todo) => {
            const { id, title, description } = todo[1];
            return (
              <Col span={4}>
                <Card hoverable title={title} key={id}>
                  <p>{description}</p>
                  <Tooltip title="Edit">
                    <Link to="/edit-todo" state={{ id, title, description }}>
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<EditOutlined />}
                      />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Button
                      onClick={() => {
                        handleDeleteTodo(todo[1].id);
                      }}
                      type="primary"
                      danger
                      shape="circle"
                      icon={<DeleteOutlined />}
                    />
                  </Tooltip>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Todolist;
