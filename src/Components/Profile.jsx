import { Descriptions, PageHeader, Tag } from "antd";
import React, { useContext } from "react";
import { UserContext } from "../ContextAPI/UserContext";

const Profile = () => {
  const {
    user: { user_details },
  } = useContext(UserContext);
  return (
    <div className='profile'>
      <PageHeader
        ghost={true}
        title={user_details?.username}
        subTitle={"nom de l'entreprise"}
        extra={[<Tag color='green'>transport maritime</Tag>]}>
        <Descriptions bordered>
          <Descriptions.Item label='Name' span={3}>
            {user_details?.username}
          </Descriptions.Item>
          <Descriptions.Item label='email' span={3}>
            {user_details?.email}
          </Descriptions.Item>
          <Descriptions.Item label='code client' span={3}>
            {user_details?._id}
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
