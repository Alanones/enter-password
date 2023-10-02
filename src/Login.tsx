import React, { useState } from "react";
import styled from "styled-components";
import avatar from "./assets/avatar.jpg";
import {
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineLock,
} from "react-icons/ai";
const Login = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <div className="items">
        <h2>Welcome back!</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={avatar} alt="avatar" className="avatar" />
          <div>
            <h5>Business Account</h5>
            <h4>Cate Marks</h4>
          </div>
        </div>
        <div>
          <div className="input">
            <AiOutlineLock size={25} className="icon" />
            <input
              type={visible ? "text" : "password"}
              placeholder={
                !visible ? "***************" : "Please Enter Password"
              }
            />
            <span onClick={() => setVisible((prev) => !prev)}>
              {visible ? (
                <AiFillEye size={25} className="icon icon-right" />
              ) : (
                <AiFillEyeInvisible
                  size={25}
                  className="icon icon-right"
                />
              )}
            </span>
          </div>
        </div>
        <div className="btn-group">
          <div style={{ display: "flex" }}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"> </span>
            </label>
            <p className="slider-text">Stay Signed in</p>
          </div>
          <div>
            <button className="btn">Continue</button>
          </div>
        </div>
        <p>
          {" "}
          <a href="#">Reset password</a>
        </p>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 50px 500px;
  padding: 40px 0px;
  h5 {
    color: #35403e;
  }
  h5,
  h3,
  h2 {
    letter-spacing: 3px;
  }
`;
