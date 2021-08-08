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

class SiteHeader2 extends React.Component {
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
                <Header className="site-layout">
                    <div>
                        <img src="https://i.ibb.co/mDn4bQv/spm.png" width="400px" height="100px" alt="todo" border="0" />
                    </div>
                </Header>
                <Layout>
                    <Sider className="sideBar" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <Menu className="sideBar" defaultSelectedKeys={['1']} mode="inline">
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

                </Layout>
                <Layout>
                    <Footer className="footer" style={{ textAlign: 'center' }}>RentX ©2018 Created by Group HDKT </Footer>
                </Layout>

            </Layout>
        );
    }
}

export default SiteHeader2;
