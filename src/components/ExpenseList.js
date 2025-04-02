import React from "react";

const ExpenseList = ({ expenses, setExpenses, setBalance }) => {
  const handleDelete = (id, price) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    setBalance(prevBalance => prevBalance + price);
  };

  return (
    <ul className="expense-list">
      {expenses.map(({ id, title, price, category, date }) => (
        <li key={id} className="expense-item">
          <span>{title} - ${price} ({category}) - {date}</span>
          <button className="delete-btn" onClick={() => handleDelete(id, price)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
// This component displays the list of expenses and allows deletion of individual expenses.