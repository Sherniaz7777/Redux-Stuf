import React from "react";
import "../header/Header.css";
import logotip from "../../imgs/Vector (3).png";
import logtitle from "../../imgs/Vector (2).png";
import user from "../../imgs/user.svg";
import basket from "../../imgs/basket.svg";
import like from "../../imgs/like.svg";
import search from "../../imgs/search.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartData } = useSelector((state) => state.cart);
  const { favoriteData } = useSelector((state) => state.like);

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
            <div className="user-icon">
              <img src={user} alt="" />
            </div>
            <p>Yana Tamkovich</p>
          </div>

          <div className="search-header">
            <img src={search} alt="search" />
            <input type="text" placeholder="Search for anything..." />
          </div>

          <div className="basket-header">
            <NavLink className='Navlink' to={"like"}>
              <img src={like} alt="" />

              <span>{favoriteData.length > 0 && favoriteData.length}</span>
            </NavLink>
            <NavLink className='Navlink' to={"/cart"}>
              <img src={basket} alt="" />
              <span>{cartData.length > 0 && cartData.length}</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
