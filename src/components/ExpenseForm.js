import React, { useState } from "react";

const ExpenseForm = ({ balance, setBalance, setExpenses, expenses }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(price);
    
    if (!title || isNaN(amount) || !category || !date) {
      alert("Please fill all fields correctly.");
      return;
    }

    if (amount > balance) {
      alert("Insufficient balance!");
      return;
    }

    const newExpense = { title, price: amount, category, date, id: Date.now() };
    const updatedExpenses = [...expenses, newExpense];

    setExpenses(updatedExpenses);
    setBalance(prevBalance => prevBalance - amount);

    // Clear input fields
    setTitle("");
    setPrice("");
    setCategory("");
    setDate("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Expense Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="number" name="price" placeholder="Expense Amount" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit" className="expense-submit-btn">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
// This component handles the form for adding new expenses.