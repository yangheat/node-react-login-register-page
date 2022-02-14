import React from "react";
import { Menu } from "antd";

function RightMenu() {
  return (
    <Menu.Item key="signin">
      <a href="/login">Signin</a>
    </Menu.Item>
  );
}

export default RightMenu;
