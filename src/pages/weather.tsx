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
  Statistic,
  notification,
} from 'antd';
import {
  BoldOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import { parse } from 'node:path/win32';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const openNotificationWithIcon = (type: NotificationType) => {
  notification[type]({
    message: 'Wrong Place',
    description:
      'Please Enter correct Location like London/United State, Hongkong ..',
  });
};
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
  const [searchLoading, setSearchLoading] = useState(false);
  const onSearch = (value: string) => {
    setSearchLoading(true);
    fetchWeathers(value);
  };
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const weathers = useSelector((state: any) => state.weatherReducer.weathers);
  const location = weathers.location;
  const current = weathers.current;
  const forecast = weathers.forecast;

  const dispatch = useDispatch();
  const fetchWeathers = async (val: string = 'Hongkong') => {
    const apiurl =
      'http://api.weatherapi.com/v1/forecast.json?key=837eab2a4759441ea02113737221409&q=' +
      val +
      '&days=7&aqi=no&alerts=no';
    const response = await axios
      .get(apiurl)
      .then(function (response) {
        dispatch(searchWeather(response.data));
        setSearchLoading(false);
      })
      .catch((err) => {
        openNotificationWithIcon('error');
        setSearchLoading(false);
        console.log('Err: ', err);
      });
  };
  useEffect(() => {
    fetchWeathers();
  }, []);
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
          <Row gutter={[16, 16]}>
            <Col offset={6} span={12}>
              <Search
                placeholder="Enter Your Location..."
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                loading={searchLoading}
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
                              <img
                                src={
                                  current && current.wind_mph
                                    ? current.condition.icon
                                    : '//cdn.weatherapi.com/weather/64x64/night/113.png'
                                }
                              />
                            </span>
                            {location && location.name}{' '}
                            <span style={{ fontSize: 18, color: 'blue' }}>
                              {location && location.country}
                            </span>{' '}
                            <span style={{ fontSize: 12 }}>
                              <b>Now : </b>
                              {location && location.localtime}
                            </span>{' '}
                          </h2>{' '}
                        </div>
                      }
                      description={
                        <>
                          <h2>
                            <span>Temp : </span>
                            {current && current.temp_c}C |{' '}
                            {current && current.temp_f}F | Wind Mph :{' '}
                            {current && current.wind_mph}| Humidity :{' '}
                            {current && current.humidity}
                          </h2>
                        </>
                      }
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col offset={6} span={12}>
              <h2>Weather Forecast In Coming 7 Days</h2>
              <Collapse onChange={onChange}>
                {forecast &&
                  forecast.forecastday.map((dayval: any) => {
                    return (
                      <Panel
                        header={
                          <>
                            <b>{dayval.date}</b> |{' '}
                            <span style={{ color: 'blue' }}>
                              {dayval.day.condition &&
                                dayval.day.condition.text}
                              <img
                                src={
                                  dayval.day.condition &&
                                  dayval.day.condition.icon
                                }
                              />
                            </span>{' '}
                            | Temp:
                            <span style={{ color: 'blue' }}>
                              {dayval.day && dayval.day.maxtemp_c}C
                            </span>
                          </>
                        }
                        key={dayval.date}
                      >
                        <div className="site-statistic-demo-card">
                          <Row gutter={16}>
                            <Col span={6}>
                              <Card>
                                <Statistic
                                  title="Max Temp"
                                  value={dayval.day && dayval.day.maxtemp_c}
                                  precision={2}
                                  valueStyle={{ color: '#cf1322' }}
                                  prefix={<ArrowUpOutlined />}
                                />
                              </Card>
                            </Col>
                            <Col span={6}>
                              <Card>
                                <Statistic
                                  title="Min Temp"
                                  value={dayval.day && dayval.day.mintemp_c}
                                  precision={2}
                                  valueStyle={{ color: '#3f8600' }}
                                  prefix={<ArrowDownOutlined />}
                                />
                              </Card>
                            </Col>
                            <Col span={6}>
                              <Card>
                                <Statistic
                                  title="Max Wind MPH"
                                  value={dayval.day && dayval.day.maxwind_mph}
                                  precision={2}
                                  valueStyle={{ color: '#cf1322' }}
                                  prefix={<ArrowDownOutlined />}
                                />
                              </Card>
                            </Col>

                            <Col span={6}>
                              <Card>
                                <Statistic
                                  title="Humadity"
                                  value={dayval.day && dayval.day.avghumidity}
                                  precision={2}
                                  valueStyle={{ color: '#cf1322' }}
                                  prefix={<ArrowDownOutlined />}
                                />
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Panel>
                    );
                  })}
              </Collapse>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default weather;
