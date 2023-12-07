import {useEffect, useState } from "react";
import "./navbar.css";

function NavBar({ itemSelect, removeToCart, totalPrice, total, setItemSelect, itemsInCart }) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    if (modal === false) {
      setModal(true);
      totalPrice()
    } else {
      setModal(false);
    }
  };

  const removeTotalCart = ()=>{
    setItemSelect([]);
  }



  useEffect(()=>{
    totalPrice()
  },[itemSelect, total])
  
  return (
    <>
      <div className="navBarBackground">
        <div className="containerLogoAndTitle">
          <h1>Cart Shop</h1>
        </div>

        <div className="containerKartShop">
          <h5>{  itemSelect.length}</h5>
          <img
            onClick={handleModal}
            className="kartShopImg"
            src="/images/cart4.svg"
            alt=""
          />
        </div>
      </div>
      {modal ? (
        <div className="modal">
          <div>
            <table>
              <thead>
                <tr>
                  <th>Cantidad</th>
                  <th>Prenda</th>
                  <th>Precio</th>
                </tr>
              </thead>

              <tbody>
                {itemSelect.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.quantity}</td>
                    <td>{item.name}</td>
                    <td>{"U$S " + item.price}</td>
                    <td>
                      <button onClick={() => removeToCart(index)}> - </button>
                    </td>
                  </tr>
                 ))}
              </tbody>

              <tfoot>
                <div>
                  <p>Total:</p>
                </div>
                <div>
                  <p>{total}</p>
                </div>
              </tfoot>
              
              <button onClick={removeTotalCart}>Delete cart</button>

            </table>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default NavBar;
