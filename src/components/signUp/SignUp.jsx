import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { postUser } from "../../store/slices/authSlice";
import styles from "./SignUp.module.css"

const SignUp = ({setisVisible}) => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(postUser(values));
    setisVisible(false);
  };

  const clickDiv = (e) => {
    let authDiv = e.target.closest("#test");

    if (!authDiv) setisVisible(false);

    if (authDiv.classList.value === styles.auth) {
      return;
    }
  };
  const change = () =>{
    setisVisible(false)
  }
  return (
    <div className={styles.overlay} onClick={clickDiv}>
      <div className={styles.auth} id="test">
      <button style={{marginTop:-35, marginLeft:-10 , width:20, height:20, background:"none", border:"none", fontSize:24, color:"white"}} onClick={change}>x</button>
        <div  style={{marginLeft:35}}>
          <h1 style={{ textAlign: "center", color:"#FFFFFF" }}>Register</h1>
          <Form
            name="auth"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
            //   span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <p style={{ textAlign: "center", marginTop:40 }}>
              <Form.Item
                
                name="name"
                
                type="text"
                id="input"
                
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder='Username' id="input"/>
              </Form.Item>
            </p>
            <p style={{ textAlign: "center" }}>
              <Form.Item
                
                name="password"
                type="password"

                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input placeholder='Password' id="input"/>
              </Form.Item>
            </p>
            <p style={{ textAlign: "center" }}>
              <Form.Item
                name="email"
                type="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input placeholder='Email' id="input"/>
              </Form.Item>
            </p>
            <p style={{ textAlign: "center" }}>
              <Form.Item
                name="avatar"
                type="img"
                

                rules={[
                  {
                    required: true,
                    message: "Please input your avatar!",
                  },
                ]}
              >
                <Input placeholder='Avatar' id="input"/>
              </Form.Item>
            </p>
            <Form.Item
              wrapperCol={{
                // offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
