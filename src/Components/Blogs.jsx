import React from "react";
import { Card, Avatar, Row, Col, Skeleton, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const { Meta } = Card;
//const style = { background: "#0092ff", padding: "8px 0" };

const Blogs = () => {
  const login_endpoint =
    "https://sage-dashboard.herokuapp.com/dashboard/articles";
  const { response, loading, error } = useFetch(login_endpoint);
  //console.log({ response, loading, error });

  return (
    <>
      {response ? (
        <Row gutter={[16, 16]}>
          {response?.data?.map((blog) => {
            return (
              <Col className='gutter-row' span={6}>
                <Card
                  style={{ width: 300 }}
                  cover={<img alt='example' src={blog.image_link} />}
                  actions={[
                    <Link to={`/dashboard/article/${blog._id}`}>
                      {" "}
                      <Button type='primary' ghost>
                        Read the article
                      </Button>
                    </Link>,
                  ]}>
                  <Meta title={blog.title} description={blog.subtitle} />
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default Blogs;
