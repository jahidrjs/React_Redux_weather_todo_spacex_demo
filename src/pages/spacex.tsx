import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { setRockets } from '../redux/actions/rocketsActions';

import { Layout } from 'antd';
const { Content } = Layout;
import { Col, Row, Card } from 'antd';
const { Meta } = Card;

import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

import { searchRocket } from '../features/spacex/SpacexSlice';

const spacex: any = () => {
  const [searchItem, SetsearchItem] = useState('');
  var rocketsValue = useSelector((state: any) => state.SpacexReducer.rockets);
  console.log(rocketsValue);
  // console.log('rocket' + rockets);
  const dispatch = useDispatch();
  const fetchRockets = async () => {
    const response = await axios
      .get('https://api.spacexdata.com/v3/launches')
      .then((res) => {
        // console.log(res.data);
        dispatch(searchRocket(res.data));
      })
      .catch((err) => {
        console.log('Err: ', err);
      });
  };

  useEffect(() => {
    fetchRockets();
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
            <Col span={24}>
              <Search
                placeholder="Search By Rocket name"
                enterButton="Search"
                size="large"
                suffix={suffix}
                onSearch={onSearch}
              />
            </Col>
          </Row>
          <br />
          <Row gutter={[16, 16]}>
            {rocketsValue &&
              rocketsValue.map((rocket: any) => {
                return (
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: '100%' }}
                      cover={
                        <img
                          alt="example"
                          src={rocket.links.mission_patch_small}
                        />
                      }
                    >
                      <Meta
                        title={
                          <>
                            <b>{rocket.mission_name}</b>{' '}
                            <span style={{ color: 'blue', fontSize: 15 }}>
                              {rocket.launch_year}
                            </span>
                          </>
                        }
                        description={rocket.launch_site.site_name_long}
                      />
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Content>
    </>
  );
};

export default spacex;
