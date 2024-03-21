import React, { useEffect, useState } from "react";
import "../header/Header.css";
import logotip from "../../imgs/Vector (3).png";
import logtitle from "../../imgs/Vector (2).png";
import user from "../../imgs/user.svg";
import basket from "../../imgs/basket.svg";
import like from "../../imgs/like.svg";
import search from "../../imgs/search.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import SignUp from "../signUp/SignUp";
import SignIn from "../signIn/SignIn";
import { loginUser } from "../../store/slices/loginSlice";
import { postUser } from "../../store/slices/authSlice";

const Header = () => {
  const { cartData } = useSelector((state) => state.cart);
  const { favoriteData } = useSelector((state) => state.like);
  const { accessToken } = useSelector((state) => state.login);
  const { dataUser } = useSelector((state) => state.auth);
  const [content, setContent] = useState("");
  const [visible, setisVisible] = useState(false);
  const [visible2, setisVisible2] = useState(false);
  const dispatch = useDispatch();

  const changeSignIn = () => {
    setContent("Sign In");
    setisVisible2(true);
  };
  const changeSignUp = () => {
    setContent("Sign Up");
    setisVisible(true);
  };
  useEffect(() => {
    dispatch(postUser());
  }, []);

  useEffect(() => {
    dispatch(loginUser());
  }, []);

  const loOut = () => {
    localStorage.removeItem("SignUp");
  };

  console.log(accessToken);
  console.log(dataUser);

  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to={"/"}>
            <div className="Logotip-header">
              <img src={logotip} alt="logotip" />
              <img src={logtitle} alt="logotip-title" />
            </div>
          </NavLink>

          <div className="user-header">
            <div className="user-icon" onClick={() => setisVisible(true)}>
              <img src={user} alt="" />
            </div>
            <p>{}</p>
            <div style={{ display: "flex", gap: 10 }}>
              <Button
                type="primary"
                danger
                ghost
                onClick={() => changeSignIn()}
              >
                Sign In
              </Button>
              <Button type="primary" danger ghost>
                {dataUser ? (
                  <span onClick={() => loOut()}>Log Out</span>
                ) : (
                  <span onClick={() => changeSignUp()}>Sign Up</span> 
                  
                )}
              </Button>
            </div>
          </div>

          <div className="search-header">
            <img src={search} alt="search" />
            <input type="text" placeholder="Search for anything..." />
          </div>

          <div className="basket-header">
            <NavLink className="Navlink" to={"like"}>
              <img src={like} alt="" />

              <span>{favoriteData.length > 0 && favoriteData.length}</span>
            </NavLink>
            <NavLink className="Navlink" to={"/cart"}>
              <img src={basket} alt="" />
              <span>{cartData.length > 0 && cartData.length}</span>
            </NavLink>
          </div>
        </nav>
      </div>
      {visible && content === "Sign Up" && (
        <SignUp setisVisible={setisVisible} />
      )}
      {visible2 && content === "Sign In" && (
        <SignIn setisVisible={setisVisible2} />
      )}
    </header>
  );
};

export default Header;
