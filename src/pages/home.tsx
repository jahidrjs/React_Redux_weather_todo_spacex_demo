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
                  <a
                    href="https://www.linkedin.com/in/jahid-al-mamun/"
                    target="_blank"
                  >
                    <LinkedinOutlined />
                  </a>,
                  <a href="https://github.com/jahidrjs" target="_blank">
                    <GithubOutlined />
                  </a>,
                  <a
                    href="https://www.facebook.com/jahid.hasan.5283166/"
                    target="_blank"
                  >
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
                <b>Uses Skill : </b>
                <span>
                  React, Redux, Typescript, ESLINT, Ant Design, Weather API,
                  Spacex API, Docker
                </span>
              </p>
              <p>
                Github :
                https://github.com/jahidrjs/React_Redux_weather_todo_spacex_demo.git
              </p>
              <p>Live: https://mytask.vercel.app</p>
              <h2>Question and Answer</h2>
              Q : What is Headless CMS?
              <br />A : Headless CMS is mainly a backend content management
              system with no front end. we can get content via an API for
              display data on our front end.
              <br />
              Q : How can you Use WordPress Posts to create a Static JavaScript
              Blog? <br />
              A : we know WordPress is the most popular blog content management
              system. so after creating any post and publish we can access it
              via API and create an easy Nextjs Blog Page
              <br />
              Q : What is Redux? Why is it needed for React app development? Any
              alternative that you could recommended as a replacement? <br />
              A : Redux is an open source library for managing and centralizing
              application state. Redux is very important for a big project to
              make it easier for developers to understand when, where, why, and
              how the state of an application has changed and gives confidence
              that the application will behave predictably when it does.
              <br />
              Q : What is the difference between collection and document in the
              NoSQL database? Explain how to determine when to use collection
              and when to use document, and why? <br />
              A: A Database contains a collection, and a collection contains
              documents and the documents contain data, they are related to each
              other.
              <br />Q : Briefly describe how to deploy a docker container to AWS
              ECS fargate. What are the steps, features, services, actions are
              needed to keep the container up and running in AWS ECS fargate?{' '}
              <br />
              A : Step 1: Set up your first run with Amazon ECS. Step 2: Create
              container and task definition. Step 3: Define your service. Step
              4: Configure your cluster. Step 5: Launch and view your resources.
              Step 6: Open the sample application. Step 7: Clean up.
              <br />
              Q : What were the major challenges you faced during the
              assignment? What did you do to overcome those? <br />A : suddenly
              assign this task with my favorite platform - yeah I enjoy this
              task but the part of the major challenges started quickly from
              scratch by studying API requests and response data handled in a
              short time with my daily task. I just simply overcome this to pass
              some sleepless nights.
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};
export default Home;
