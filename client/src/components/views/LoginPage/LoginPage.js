import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../_action/user_action";

import { Form, Input, Button, message, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./LoginPage.css";

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (value) => {
    const body = {
      email: value.email,
      password: value.password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      } else {
        message.error("Check out your Account or Password again");
      }
    });
  };

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Form
        name="login-form"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<UserOutlined className="login-form-email-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="login-form-password-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <a href="./register" className="login-form-register-page">
            register now!
          </a>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default LoginPage;
