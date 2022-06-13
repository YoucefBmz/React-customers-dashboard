import React, { useContext } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { useNavigate } from "react-router";
import axios from "axios";

import { UserContext } from "../ContextAPI/UserContext";

const Login = () => {
  const navigate = useNavigate();

  const { error, dispatch } = useContext(UserContext);
  const onFinish = async (values) => {
    const login_endpoint = "http://localhost:8000/api/user/login";

    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(login_endpoint, {
        email: values.email,
        password: values.password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      window.location.reload();
      navigate("/dashboard/commandes");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      onFinishFailed();
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    //dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  };
  return (
    <div className='login'>
      <div className='form-container'>
        <h1>
          My{" "}
          <img
            src='https://www.sage.com/en-us/-/media/images/sagedotcom/master/logos/sage-logo%20svg.svg?iar=0&extension=webp&hash=1A173CD71FF673298FAC67579A7F82CE'
            style={{ width: "70px", height: "100px" }}
            alt=''
          />{" "}
          Dashbord
        </h1>
        {error && (
          <>
            <div className='loginAlertContainer'>
              <Alert
                className='loginAlert'
                message='Alert Message Text'
                type='error'
                closable
              />
            </div>
          </>
        )}
        <Form
          name='basic'
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <Form.Item
            label='email'
            name='email'
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{
              offset: 5,
              //span: 16,
            }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 5,
              span: 3,
            }}>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
