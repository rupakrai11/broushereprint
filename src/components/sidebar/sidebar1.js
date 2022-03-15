import { Col, Row } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { sideBarlist } from "./sidebarList";
import { Link } from "react-router-dom";
import { Layout } from "antd";

// const { SubMenu } = Menu;

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Headers from "../header/Headers";
import CustomRoute from "../route";

const { Sider, Header, Content } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const onCollapse=()=>{
  //   setCollapsed(collapsed)
  // }
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} className="sidebareItem">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {sideBarlist.map((item) => (
                  <Menu.Item icon={item.icons}>
                    <Link to={item.path}> {item.title}</Link>
                  </Menu.Item>
                ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
         
          >
<CustomRoute/>
          
          </Content>
        </Layout>
      </Layout>
  );
};

export default Sidebar;
