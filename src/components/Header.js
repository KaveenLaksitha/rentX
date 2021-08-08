import React from "react";
import "./style.scss";
import { Layout, Menu } from 'antd';

import {
  UnorderedListOutlined,
  HomeOutlined,
  LogoutOutlined
} from '@ant-design/icons';

const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiteHeader extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Layout>
          <Sider className="sideBar" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu theme="light" className="sideBar" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="To Do">
                <Menu.Item key="2">Add New</Menu.Item>
                <Menu.Item key="3">Completed</Menu.Item>
              </SubMenu>
              <Menu.Item key="4" icon={<LogoutOutlined />}>
                Logout
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="site-layout">
              <img src="https://i.ibb.co/mDn4bQv/spm.png" width="400px" height="100px" alt="todo" border="0" />
            </Header>
            <Footer></Footer>
          </Layout>
        </Layout>

      </Layout>
    );
  }
}

export default SiteHeader;
