import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  TagsFilled,
  WeiboCircleFilled,
  RocketFilled,
} from '@ant-design/icons';

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
          <Link to={'/'}>
            <HomeOutlined /> Home
          </Link>
        </Menu.Item>

        <Menu.Item key="todo">
          <Link to={'todo'}>
            <TagsFilled /> ToDo List
          </Link>
        </Menu.Item>

        <Menu.Item key="weather">
          <Link to={'weather'}>
            <WeiboCircleFilled /> Weather
          </Link>
        </Menu.Item>

        <Menu.Item key="bonus">
          <Link to={'spacex'}>
            <RocketFilled /> Bonus : SpaceX
          </Link>
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
