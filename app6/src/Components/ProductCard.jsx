export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="200" />

      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}


// ------------------------------
// 1. sum(transactions)
// ------------------------------
// function sum(transactions) {
//   const result = transactions.reduce(
//     (acc, curr) => {
//       if (curr.amount > 0) {
//         acc.income += curr.amount;
//       } else {
//         acc.expense += Math.abs(curr.amount); // expense must be positive
//       }
//       return acc;
//     },
//     { income: 0, expense: 0 }
//   );

//   return result;
// }


// // ------------------------------
// // 2. handleSubmit(text, amount, transactions)
// // ------------------------------
// function handleSubmit(text, amount, transactions) {

//   // Validation
//   if (!text || text.trim() === "") {
//     throw new Error("Text cannot be empty");
//   }

//   if (amount === 0) {
//     throw new Error("Amount cannot be zero");
//   }

//   // Find max id
//   const maxId =
//     transactions.length > 0
//       ? Math.max(...transactions.map(t => t.id))
//       : 0;

//   // Create new transaction
//   const newTransaction = {
//     id: maxId + 1,
//     text,
//     amount
//   };

//   // Add immutably
//   return [...transactions, newTransaction];
// }


// // ------------------------------
// // 3. renderTransactions(transactions)
// // ------------------------------
// function renderTransactions(transactions) {
//   return transactions.map(
//     (t) => `${t.text} : ${t.amount}`
//   );
// }


// // ------------------------------
// // 4. deleteTransaction(transactions, id)
// // ------------------------------
// function deleteTransaction(transactions, id) {
//   return transactions.filter(t => t.id !== id);
// }


// // ======================================================
// // ✅ Example Usage (Simulation)
// // ======================================================

// let transactions = [
//   { id: 1, text: "Salary", amount: 5000 },
//   { id: 2, text: "Food", amount: -200 }
// ];

// // Add transaction
// transactions = handleSubmit("Freelance", 1000, transactions);

// // Render list
// console.log(renderTransactions(transactions));
// // ["Salary : 5000", "Food : -200", "Freelance : 1000"]

// // Sum income & expense
// console.log(sum(transactions));
// // { income: 6000, expense: 200 }

// // Delete transaction
// transactions = deleteTransaction(transactions, 2);

// console.log(transactions);