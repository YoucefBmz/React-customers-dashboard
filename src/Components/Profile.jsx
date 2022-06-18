import { Descriptions, PageHeader, Skeleton, Tag } from "antd";
import React from "react";

const Profile = () => {
  return (
    <div className='profile'>
      <PageHeader
        ghost={true}
        title={"response?.data?.username"}
        subTitle={`Companie Arkas SPA`}
        extra={[<Tag color='green'>transport maritime</Tag>]}>
        <Descriptions bordered>
          <Descriptions.Item label='Name' span={3}>
            youcef
          </Descriptions.Item>
          <Descriptions.Item label='email' span={3}>
            email
          </Descriptions.Item>
          <Descriptions.Item label='code client' span={3}>
            code client
          </Descriptions.Item>
          <Descriptions.Item label='Produits sage' span={4}>
            liste des produits sage pocédé
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
};

export default Profile;
