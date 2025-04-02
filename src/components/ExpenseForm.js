import React, { useState } from "react";
import Modal from "react-modal";

const ExpenseForm = ({ addExpense }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [expense, setExpense] = useState({ title: "", price: "", category: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.title || !expense.price || !expense.category || !expense.date) return;
    addExpense({ ...expense, id: Date.now(), price: Number(expense.price) });
    setExpense({ title: "", price: "", category: "", date: "" });
    setModalIsOpen(false);
  };

  return (
    <>
      <button type="button" onClick={() => setModalIsOpen(true)}>+ Add Expense</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <form onSubmit={handleSubmit}>
          <input name="title" value={expense.title} onChange={(e) => setExpense({ ...expense, title: e.target.value })} placeholder="Title" />
          <input name="price" type="number" value={expense.price} onChange={(e) => setExpense({ ...expense, price: e.target.value })} placeholder="Amount" />
          <select name="category" value={expense.category} onChange={(e) => setExpense({ ...expense, category: e.target.value })}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
          </select>
          <input name="date" type="date" value={expense.date} onChange={(e) => setExpense({ ...expense, date: e.target.value })} />
          <button type="submit">Add Expense</button>
        </form>
      </Modal>
    </>
  );
};

export default ExpenseForm;
// This component allows the user to add a new expense. It uses a modal for input and validates the form before submission.