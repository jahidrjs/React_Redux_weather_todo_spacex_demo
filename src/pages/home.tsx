import React from 'react';
import { Breadcrumb, Layout, Row, Col, Avatar, Card } from 'antd';
import { Link } from 'react-router-dom';
import {
  PhoneOutlined,
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
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
                  <a href="https://linkedin.com" target="_blank">
                    <LinkedinOutlined />
                  </a>,
                  <a href="http://github.com">
                    <GithubOutlined />
                  </a>,
                  <a href="http://facebook.com">
                    <FacebookOutlined />
                  </a>,
                ]}
              >
                <Meta
                  title="Jahid Al Mamun"
                  description={
                    <>
                      <b>Sr. Web Application Developer</b>
                      <br></br>
                      <span>
                        <PhoneOutlined /> +8801729577877
                      </span>
                      <br></br>
                      <span>
                        <MailOutlined /> rjs.jahid22@gmail.com
                      </span>
                    </>
                  }
                />
              </Card>
            </Col>
            <Col span={18}>
              <h2>ASSIGNMENT</h2>
              <p>
                CREATE A HELLOWORLD WEB APPS IN REACTJS THAT, AT LEAST, HAS THE
                FOLLOWING:<br></br>
                1. A menu that can navigate two pages, a todo list and a weather
                forecast page<br></br>
                2. A todo list that can add, edit, remove and complete any items
                <br></br>
                3. A page displaying real time weather forecast in coming 7
                days, information can retrieve from any <br></br>
                opensource weather api, e.g. OpenWeather. User can input a
                city/location and the weather forecast <br></br>
                will fetch and update accordingly<br></br>
                4. Dockerize your deliverable into container for deployment
              </p>
              <p>
                <h3>OPTION 1:</h3>
                I. A third page that retrieve and display some basic information
                through any open/mock graphQL api. <br />
                e.g. SpaceX API or SWAPI
                <br />
                II. Information from (I.) can be searched/filtered on screen
                <br />
              </p>
              <p>
                Github :
                https://github.com/jahidrjs/React_Redux_weather_todo_spacex_demo.git
              </p>
              <p>Live: </p>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};
export default Home;
