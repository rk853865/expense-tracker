import React from "react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <ul>
      {expenses.map((exp) => (
        <li key={exp.id}>
          {exp.title} - ${exp.price} 
          <button className="delete-btn" onClick={() => deleteExpense(exp.id, exp.price)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
// This component displays the list of expenses and allows the user to delete an expense.