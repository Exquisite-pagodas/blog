import { Button, Form, Input } from "antd";
import React, { FormEvent, useEffect } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export default function Register() {
  // 注册逻辑
  const register = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
        console.log("注册成功...");
      }
    });
  };

  // 获取input框的value
  // HTMLFormElement extends Element
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //  阻止表单提交默认行为
    event.preventDefault();
    // 获取用户名和密码
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    register({ username, password });
  };

  return (
    <>
      <Form onFinish={handleSubmit}>
        <Form.Item
          name={"username"}
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          {/*<label htmlFor={"username"}>用户名</label>*/}
          <Input placeholder={"用户名"} id={"username"} type={"text"} />
        </Form.Item>
        <br />
        <Form.Item
          name={"password"}
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input placeholder={"密码"} id={"password"} type={"password"} />
        </Form.Item>
        <br />
        <Form.Item>
          <Button htmlType={"submit"} type={"primary"}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
