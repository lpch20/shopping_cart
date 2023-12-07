import { useState } from "react";
import "./home.css";
import NavBar from "../../components/NavBar/NavBar";
import Articles from "../../components/Articles/Articles";

function Home() {
  const [itemSelect, setItemSelect] = useState([]);
  const [total, setTotal] = useState(0);


  const totalPrice = () => {
    let totalPrice = 0;

    itemSelect.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    setTotal(totalPrice);
  };

  const removeFromCart = (index) => {
    setItemSelect((prevData) => {
      const updatedCart = [...prevData];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  return (
    <>
      <header>
        <NavBar
          setItemSelect={setItemSelect}
          total={total}
          totalPrice={totalPrice}
          removeToCart={removeFromCart}
          itemSelect={itemSelect}
        />
      </header>
      <main>
        <div>
          <Articles
            totalPrice={totalPrice}
            itemSelect={itemSelect}
            setItemSelect={setItemSelect}
          />
        </div>
      </main>
    </>
  );
}

export default Home;
