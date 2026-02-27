export default function Header({ cartCount, totalPrice }) {
  return (
    <div>
      <h2>React Demo App 🛒</h2>
      <p>Items in Cart: {cartCount}</p>
      <p>Total Price: ₹{totalPrice}</p>
    </div>
  );
}