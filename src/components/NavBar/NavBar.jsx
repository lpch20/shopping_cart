import React, { useState } from "react";
import "./navbar.css";

function NavBar() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  return (
    <>
      <div className="navBarBackground">
        <div className="containerLogoAndTitle">
          <img className="logo" src="/images/logo para una t 0.png" alt="" />
          <h1>Kart Shop</h1>
        </div>

        <div className="containerKartShop">
          <img
            onClick={handleModal}
            className="kartShopImg"
            src="/images/cart4.svg"
            alt=""
          />
        </div>
      </div>
      {modal ? <div className="modal"></div> : null}
    </>
  );
}

export default NavBar;
