import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: '',
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: '',
    disabled: true,
  },
];

const navbar: any = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">
          <Link to={'/'}>Home</Link>
        </Menu.Item>

        <Menu.Item key="todo">
          <Link to={'todo'}>ToDo List</Link>
        </Menu.Item>

        <Menu.Item key="weather">
          <Link to={'weather'}>Weather</Link>
        </Menu.Item>

        <Menu.Item key="bonus">
          <Link to={'spacex'}>Bonus : SpaceX</Link>
        </Menu.Item>
      </Menu>
      {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
      /> */}
    </Header>
  );
};

export default navbar;
