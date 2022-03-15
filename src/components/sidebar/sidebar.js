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
  MenuOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Headers from "../header/Headers";
import CustomRoute from "../route";
import { Footer } from "antd/lib/layout/layout";

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
      {/* <Row>
<Col span={18} push={6}> */}
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
{/* </Col> */}
{/* <Col span={6} pull={18}> */}
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
<CustomRoute/>
          
          </Content>

        </Layout>
        {/* </Col> */}

      {/* </Row> */}

      </Layout>
  );
};

export default Sidebar;
