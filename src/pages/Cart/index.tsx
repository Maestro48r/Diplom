import { useContext } from "react";
import { CartContext } from "../../Context/Cart";
import style from "./style.module.css";

const Cart = ({ showModal, toggle }) => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
      showModal && (
      <div className={style.container}>
        <h2>Корзина</h2>
        <div>
          <button onClick={toggle}>Закрыть</button>
        </div>
        <div className={style.cart}>
          {cartItems.map((item) => (
            <div className={style.items} key={item.id}>
              
              <div className={style.item}>
                <img src={item.imgUrl} alt={item.title} />
              <div className={style.title}>
                  <h2>{item.title}</h2>
                  <h3>{item.price} ₽</h3>
                </div>
              </div>
              <div className={style.count}>
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  +
                </button>
                <p>{item.quantity} шт.</p>
                <button
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div>
            <h2>Итого: {getCartTotal()} ₽</h2>
            <button
              onClick={() => {
                clearCart();
              }}
            >
              Очистить корзину
            </button>
          </div>
        ) : (
          <h2>Ваша корзина пуста</h2>
        )}
      </div>
      )
  );
};



export default Cart;
