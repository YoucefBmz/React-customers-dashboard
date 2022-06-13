import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
//const style = { background: "#0092ff", padding: "8px 0" };

const Blogs = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col className='gutter-row' span={6}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
            actions={[
              <SettingOutlined key='setting' />,
              <EditOutlined key='edit' />,
              <EllipsisOutlined key='ellipsis' />,
            ]}>
            <Meta
              avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
              title='Card title'
              description='This is the description'
            />
          </Card>
        </Col>
        <Col className='gutter-row' span={6}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
            actions={[
              <SettingOutlined key='setting' />,
              <EditOutlined key='edit' />,
              <EllipsisOutlined key='ellipsis' />,
            ]}>
            <Meta
              avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
              title='Card title'
              description='This is the description'
            />
          </Card>
        </Col>
        <Col className='gutter-row' span={6}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
            actions={[
              <SettingOutlined key='setting' />,
              <EditOutlined key='edit' />,
              <EllipsisOutlined key='ellipsis' />,
            ]}>
            <Meta
              avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
              title='Card title'
              description='This is the description'
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Blogs;
