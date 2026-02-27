// export default function Cart({ cart, removeFromCart, totalPrice }) {
//   return (
//     <div className="cart">
//       <h3>Your Cart</h3>

//       {cart.length === 0 && <p>No items in cart</p>}

//       {cart.map((item, index) => (
//         <div className="cart-item" key={index}>
//           <span>
//             {item.name} - ₹{item.price}
//           </span>

//           <button onClick={() => removeFromCart(index)}>
//             Remove
//           </button>
//         </div>
//       ))}

//       <h3>Total: ₹{totalPrice}</h3>
//     </div>
//   );
// }



import { useState } from "react";

export default function Cart({ cart, removeFromCart, totalPrice }) {
  // Address form state
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    city: "",
    pincode: "",
    addressLine: ""
  });

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;

    setAddress((prev) => ({ ...prev, 
      [name]: value
    }));
 }

  // Handle order submit
  function handleOrder(e) {
    e.preventDefault();

    if (!address.name || !address.phone || !address.addressLine) {
      alert("Please fill all required fields");
      return;
    }

    alert("✅ Order Placed Successfully!");

    console.log("Order Details:", {
      cart,
      totalPrice,
      address
    });
  }

  return (
    <div className="cart">
      <h3>Your Cart</h3>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>
            {item.name} - ₹{item.price}
          </span>

          <button onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>

      {/* Address Form */}
      {cart.length > 0 && (
        <form className="checkout-form" onSubmit={handleOrder}>
          <h3>Shipping Address</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={address.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={address.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={address.pincode}
            onChange={handleChange}
          />

          <textarea
            name="addressLine"
            placeholder="Full Address"
            value={address.addressLine}
            onChange={handleChange}
          />

          <button type="submit" className="order-btn">
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}

