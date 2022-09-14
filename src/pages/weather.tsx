import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showWeather, searchWeather } from '../features/weather/WeatherSlice';
import {
  Breadcrumb,
  Layout,
  Row,
  Col,
  Collapse,
  Input,
  Avatar,
  Card,
  Carousel,
} from 'antd';
import {
  BoldOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const { Content } = Layout;
const { Panel } = Collapse;
const { Search } = Input;
const { Meta } = Card;
const text =
  ' A dog is a type of domesticated animal.  Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.';
const weather: any = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  const onSearch = (value: string) => {
    const [searchItem, SetsearchItem] = useState(value);
  };
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const weathers = useSelector((state: any) => state.weatherReducer.weather);
  // console.log('rocket' + rockets);
  const dispatch = useDispatch();
  const fetchWeathers = async () => {
    const searchval: string = useSelector((state: any) => state.searchItem);
    const response = await axios
      .get(
        'http://api.weatherapi.com/v1/forecast.json?key=837eab2a4759441ea02113737221409&q=pakistan&days=7&aqi=no&alerts=no'
      )
      .catch((err) => {
        console.log('Err: ', err);
      });

    dispatch(searchWeather(response));
  };

  return (
    <>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Weather Page</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Row gutter={[16, 16]}>
            <Col offset={6} span={12}>
              <Search
                placeholder="Enter Your Location..."
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                loading={false}
              />
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Card
                    style={{ width: '100%' }}
                    cover={
                      <img
                        alt="weather app"
                        height={150}
                        src="https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__340.jpg"
                      />
                    }
                  >
                    <Meta
                      // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                      title={
                        <div>
                          <h2>
                            <span style={{ fontSize: 12 }}>
                              Sunny
                              <img src="//cdn.weatherapi.com/weather/64x64/night/113.png" />
                            </span>
                            Islamabad{' '}
                            <span style={{ fontSize: 18, color: 'blue' }}>
                              Pakistan
                            </span>{' '}
                            <span style={{ fontSize: 12 }}>
                              <b>Now : </b>2022-09-14 18:26
                            </span>{' '}
                          </h2>{' '}
                        </div>
                      }
                      description={
                        <>
                          <h2>
                            <span>Temp : </span>32C | 65F | Wind Mph : 2.2
                          </h2>
                        </>
                      }
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col offset={6} span={12}>
              <h2>Next Days Weather</h2>
              <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default weather;
