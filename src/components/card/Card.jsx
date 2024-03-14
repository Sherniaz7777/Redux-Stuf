import React from "react";

const Card = ({ title, images, description, category, price }) => {
  return (
    <div>
      <div className="card" style={{ width: " 15rem" }}>
        <img
          style={{ width: 238.5 }}
          src={images}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title.length > 20 ? `${title.slice(0, 20)}...` : title}
          </h5>
          {/* <p className="card-text">{category}</p> */}
          <h4 style={{fontSize:14}}>{category}</h4>
          <div style={{display:"flex", gap:5,  alignItems:"center"}}>

          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
          <span>Price: {price}$</span>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default Card;
