import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { Skeleton } from "antd";

import { Descriptions, PageHeader, Tag } from "antd";
import Typography from "antd/lib/typography";

const ProductDetails = () => {
  const { id } = useParams();
  const product_endpoint = "http://localhost:8000/dashboard//product/" + id;
  const { response, loading, error } = useFetch(product_endpoint);
  console.log({ response, loading, error });
  return (
    <div className='site-page-header-ghost-wrapper'>
      {response ? (
        <PageHeader
          ghost={true}
          onBack={() => window.history.back()}
          title={response?.data?.product_name}
          subTitle={`V.${response?.data?.product_version}`}
          extra={[
            <Tag color='green'>{response?.data?.category.toUpperCase()}</Tag>,
          ]}>
          <Descriptions bordered>
            <Descriptions.Item label='Name' span={1}>
              {response?.data?.product_name}
            </Descriptions.Item>
            <Descriptions.Item label='product_version' span={1}>
              {response?.data?.product_version}
            </Descriptions.Item>
            <Descriptions.Item label='numéro de serie' span={3}>
              {response?.data?.num_serie}
            </Descriptions.Item>
            <Descriptions.Item label='description' span={4}>
              {response?.data?.description}
            </Descriptions.Item>
            <Descriptions.Item label='Fiche technique' span={1}>
              <a href={response?.data?.fiche_technique}>
                {response?.data?.fiche_technique}
              </a>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      ) : (
        <Skeleton active />
      )}
    </div>
  );
};

export default ProductDetails;
