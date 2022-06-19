import React from "react";
import { Col, Row, Statistic, Card } from "antd";
//import { Link } from "react-router-dom";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const Cars = () => {
  return (
    <>
      <h2>Statistiques</h2>
      <div className='site-statistic-demo-card'>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title='Active'
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title='Active'
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
            </Card>
          </Col>

          <Col span={12}>
            <Card>
              <Statistic
                title='Active'
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title='Idle'
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cars;
