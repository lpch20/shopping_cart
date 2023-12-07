import { useEffect, useState } from "react";
import "./articles.css";
import article from "../../../API/API_articles";

// eslint-disable-next-line react/prop-types
function Articles({ setItemSelect, totalPrice }) {
  const [dataItem, setDataItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemValue, setItemValue] = useState("");

  //ADD TO STATE DATA OF DATABASE
  const fetchData = async () => {
    try {
      const data = await article();
      const itemsWithQuantity = data.map((item) => ({ ...item, quantity: 0 }));
      setDataItem(filteredItems.length > 0 ? filteredItems : itemsWithQuantity);
    } catch (error) {
      console.log(error);
    }
  };

  //SUBSTRACT COUNT
  const handleCountAdd = (index) => {
    setDataItem((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        quantity: newData[index].quantity + 1,
      };

      return newData;
    });
  };

  //ADD COUNT
  const handleCountSubstract = (index) => {
    setDataItem((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        quantity: newData[index].quantity - 1,
      };
      return newData;
    });
  };

  //FUNCTION ADD TO CART

  const addToCart = (index) => {
    setItemSelect((prevData) => {
      const selectedProduct = {
        id: dataItem[index].id_item,
        quantity: dataItem[index].quantity,
        price: dataItem[index].price,
        name: dataItem[index].product_title,
      };

      // Buscar el producto en el carrito por su ID
      const existingProductIndex = prevData.findIndex(
        (product) => product.id === selectedProduct.id
      );

      // Si el producto ya está en el carrito, actualizar la cantidad y precio
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevData];
        updatedCart[existingProductIndex].quantity += selectedProduct.quantity;
        updatedCart[existingProductIndex].price += selectedProduct.price;
        return updatedCart;
      } else {
        // Si el producto no está en el carrito, agregarlo
        return [...prevData, selectedProduct];
      }
    });

    totalPrice();
  };

  //SEARCHINPUT

  const searchItems = () => {
    if (itemValue !== "") {
      const filtered = dataItem.filter((item) =>
        item.product_title.toLowerCase().includes(itemValue.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(dataItem);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    searchItems();
  }, [dataItem, itemValue]);

  return (
    <>
      <div className="containerArticles">
        <div>
          <input
            value={itemValue}
            onChange={(e) => setItemValue(e.target.value)}
            type="search"
            name=""
            id=""
          />
        </div>
        <div className="cardContainer">
          {(filteredItems.length > 0 ? filteredItems : dataItem).map(
            (data, index) => (
              <div key={data.id_item} className="card">
                <div className="card-img">
                  <div className="img"></div>
                </div>
                <div className="card-title">{data.product_title}</div>
                <div className="card-subtitle">{data.product_description}</div>
                <hr className="card-divider" />
                <div className="card-footer">
                  <div className="card-price">
                    <span>$</span> {data.price}
                  </div>
                  {data.quantity === 0 ? (
                    <button
                      onClick={() => addToCart(index)}
                      disabled
                      className="card-btn"
                    >
                      Add to cart
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      ></svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(index)}
                      className="card-btn"
                    >
                      Add to cart
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      ></svg>
                    </button>
                  )}
                </div>

                <div className="stockContainer">
                  <div className="btn-container">
                    {data.quantity === 0 ? (
                      <button
                        disabled
                        onClick={() => handleCountSubstract(index)}
                        className="btn-stock"
                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCountSubstract(index)}
                        className="btn-stock"
                      >
                        -
                      </button>
                    )}
                    <p>{data.quantity}</p>
                    {data.quantity === data.stock ? (
                      <button
                        disabled
                        onClick={() => handleCountAdd(index)}
                        className="btn-stock"
                      >
                        +
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCountAdd(index)}
                        className="btn-stock"
                      >
                        +
                      </button>
                    )}
                  </div>
                  <div>
                    <p>Stock: {data.stock}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Articles;
