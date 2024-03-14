import React from "react";
import "../header/Header.css";
import logotip from "../../imgs/Vector (3).png";
import logtitle from "../../imgs/Vector (2).png";
import user from "../../imgs/user.svg";
import basket from "../../imgs/basket.svg";
import like from "../../imgs/like.svg";
import search from "../../imgs/search.svg"
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="Logotip-header">
            <img src={logotip} alt="logotip" />
            <img src={logtitle} alt="logotip-title" />
          </div>

          <div className="user-header">
            <div  className="user-icon">
              <img src={user} alt="" />
            </div>
            <p>Yana Tamkovich</p>
          </div>

          <div className="search-header">
            <img src={search} alt="search" />
            <input type="text" placeholder="Search for anything..." />
          </div>

          <div className="basket-header">
            <img src={like} alt="" />
            <img src={basket} alt="" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
