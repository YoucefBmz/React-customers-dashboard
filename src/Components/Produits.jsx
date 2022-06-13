import { Button, Space, Table } from "antd";
import Title from "antd/lib/typography/Title";

import React from "react";
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
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
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
  /*
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";

          if (tag === "loser") {
            color = "volcano";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  */
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size='middle'>
        <Link to={`/dashboard/produits/${record.product_name}`}>
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
        />
      )}
      {error && <p>error : {error}</p>}
    </div>
  );
};

export default Produits;
