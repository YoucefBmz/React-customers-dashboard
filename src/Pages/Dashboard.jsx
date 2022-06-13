import React, { useState, useContext } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import {
  Layout,
  Menu,
  Breadcrumb,
  Avatar,
  Typography,
  Button,
  Popover,
} from "antd";

import {
  UserOutlined,
  CarOutlined,
  PieChartOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import Commandes from "../Components/Commandes";
import Questions from "../Components/Questions";
import Statistics from "../Components/Statistics";
import Blogs from "../Components/Blogs";

import { UserContext } from "../ContextAPI/UserContext";
import Produits from "../Components/Produits";
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const [state, setState] = useState({ collapsed: false });
  const { user } = useContext(UserContext);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };
  const { collapsed } = state;
  const { pathname } = useLocation();
  const location = pathname.split("/");

  const active = () => {
    if (location[location.length - 1] === "commandes") return 1;
    if (location[location.length - 1] === "drivers") return 2;
    if (location[location.length - 1] === "cars") return 3;
  };

  const content = (
    <div>
      <p>
        <GoogleOutlined />
        <span> </span> {user.user_details.email}
      </p>

      <Button>Logout</Button>
    </div>
  );
  return (
    <div className='Dashboard'>
      <Layout style={{ minHeight: "100vh" }}>
        <Header className='header'>
          <Title className='appTitle' level={2} style={{ color: "#fff" }}>
            Sage Dashboard
          </Title>
          <h2
            style={{
              color: "#fff",
            }}>
            <Popover
              placement='bottomRight'
              title={user.user_details.username}
              content={content}
              trigger='click'>
              <Avatar
                style={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                }}>
                {" "}
                RB
              </Avatar>{" "}
            </Popover>
            {user.user_details.username}
          </h2>
        </Header>
        <Layout>
          <Sider
            collapsible
            width={200}
            collapsed={collapsed}
            onCollapse={onCollapse}
            className='site-layout-background'>
            <Menu
              theme='light'
              mode='inline'
              defaultSelectedKeys={[`${active()}`]}
              defaultOpenKeys={[`sub${active()}`]}
              style={{ height: "100%", borderRight: 0 }}>
              <Menu.Item key='1' icon={<PieChartOutlined />}>
                <Link to='commandes'>Voir les commandes</Link>
              </Menu.Item>
              <Menu.Item key='2' icon={<UserOutlined />}>
                <Link to='questions'>Questions fréquantes</Link>
              </Menu.Item>
              <Menu.Item key='6' icon={<CarOutlined />}>
                <Link to='produits'>Produits</Link>
              </Menu.Item>
              <Menu.Item key='3' icon={<CarOutlined />}>
                <Link to='stats'>Statistiques</Link>
              </Menu.Item>
              <Menu.Item key='4' icon={<CarOutlined />}>
                <Link to='settings'>Settings</Link>
              </Menu.Item>
              <Menu.Item key='5' icon={<CarOutlined />}>
                <Link to='blog'>Communication</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {location.map((value, index) => {
                return <Breadcrumb.Item key={index}>{value}</Breadcrumb.Item>;
              })}
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                background: "#fff",
                minHeight: 280,
                borderRadius: "3px",
              }}>
              <Routes>
                <Route path='commandes' element={<Commandes />} />
                <Route path='questions' element={<Questions />} />
                <Route path='produits' element={<Produits />} />
                <Route path='stats' element={<Statistics />} />
                <Route path='blog' element={<Blogs />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
