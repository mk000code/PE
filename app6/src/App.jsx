import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

export default function App() {

  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 453224,
      image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-plus/db16255/media-gallery/non-touch/laptop-dell-plus-db16255nt-ice-bl-fpr-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=979&qlt=100,1&resMode=sharp2&size=979,804&chrss=full"
    },

    {
      id: 2,
      name: "Mobile",
      price: 443305,
      image: "https://vasanthandco.in/UploadedFiles/productimages/20251022012604-71BiI-RQ--L-_SL1500_.jpg"
    },
    {
      id: 3,
      name: "Mouse",
      price: 4500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3qARXQdkyZYhkR35oeGLmLoIWjODSqbNbA&s"
    },
    
    {
      id: 4,
      name: "MicroPhone",
      price: 4500,
      image: "https://www.unboxify.in/cdn/shop/products/51zL2U_3bDL._SL1200.jpg?v=1694963807"
    },

  ];

  function addToCart(product) {
    setCart([...cart, product]);
  }

  
  function removeFromCart(id) {
    setCart(cart.filter((item, index) => index !== id));
  }


  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <Header cartCount={cart.length} totalPrice={totalPrice} />

      <ProductList
        products={products}
        addToCart={addToCart}
      />

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
      />
    </div>
  );
}