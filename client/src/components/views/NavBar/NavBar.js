import React from "react";
import { Layout, Menu } from "antd";
import RightMenu from "./Sections/RightMenu";
import LeftMenu from "./Sections/LeftMenu";
import "./NavBar.css";
const { Header } = Layout;

function NavBar() {
  return (
    <Layout>
      <Header className="header_menu">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <LeftMenu className="left_menu" />
          <RightMenu className="right_menu" />
        </Menu>
      </Header>
    </Layout>
  );
}

export default NavBar;
