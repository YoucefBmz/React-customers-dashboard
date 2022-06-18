import { Button, Space, Table, Tag } from "antd";
import Title from "antd/lib/typography/Title";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const columns = [
  {
    title: "Nom du Produits",
    dataIndex: "product_name",
    key: "product_name",
    render: (text) => (
      <Title className='appTitle' level={5}>
        {text}
      </Title>
    ),
  },
  /*
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  */
  {
    title: "numéro de série",
    dataIndex: "num_serie",
    key: "num_serie",
  },

  {
    title: "Version",
    dataIndex: "product_version",
    key: "product_version",
  },

  {
    title: "category",
    key: "category",
    dataIndex: "category",
    render: (category) => (
      <>
        <Tag color='green' key={category}>
          {category.toUpperCase()}
        </Tag>
      </>
    ),
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size='middle'>
        <Link to={`/dashboard/produits/${record._id}`}>
          {" "}
          <Button type='primary' ghost>
            See more
          </Button>
        </Link>
      </Space>
    ),
  },
];
const Produits = () => {
  const login_endpoint = "http://localhost:8000/dashboard/products";
  const { response, loading, error } = useFetch(login_endpoint);
  //console.log(response, loading, error);

  //pagination:
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    pageSize: 5,
  });
  const [offset, setOffset] = useState(0);
  const handleTableChange = (pagination) => {
    setOffset(pagination.pageSize * (pagination.current - 1));
    setPage(pagination.current);
  };

  return (
    <div>
      <Title className='appTitle' level={2} style={{ textAlign: "center" }}>
        Liste des Produits
      </Title>

      <p className='products-paragaph'>
        Plus de trois millions de clients font confiance aux solutions Sage dans
        le monde. Avec Sage Business Cloud, vous gérez votre comptabilité, vos
        devis/factures ou gestion commerciale, votre paie et vos ressources
        humaines.
      </p>
      {response && (
        <Table
          loading={loading}
          columns={columns}
          dataSource={response?.data}
          pagination={{
            current: page,
            pageSize: pagination.pageSize,
            total: response?.data?.length,
          }}
          onChange={handleTableChange}
        />
      )}
      {!response && <p>error :( reload again </p>}
    </div>
  );
};

export default Produits;
