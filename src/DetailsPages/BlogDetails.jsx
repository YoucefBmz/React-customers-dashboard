import { PageHeader, Skeleton, Tag } from "antd";

import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Typography } from "antd";

const BlogDetails = () => {
  const { id } = useParams();
  const { Title } = Typography;
  const Blog_endpoint = "http://localhost:8000/dashboard/article/" + id;
  const {
    response: { data },
    loading,
    error,
  } = useFetch(Blog_endpoint);
  console.log({ data, loading, error });
  return (
    <div className='site-page-header-ghost-wrapper'>
      {data ? (
        <>
          <PageHeader
            ghost={true}
            onBack={() => window.history.back()}
            title={data?.title}
            subTitle={data?.subtitle}
            extra={[
              <Tag color='green'>{data?.category.toUpperCase()}</Tag>,
            ]}></PageHeader>
          <div className='blog-image-container'>
            <img alt='' className='blog-image' src={data?.image_link} />
          </div>

          <Title level={4}>{data?.text}</Title>
        </>
      ) : (
        <Skeleton active />
      )}
    </div>
  );
};

export default BlogDetails;
