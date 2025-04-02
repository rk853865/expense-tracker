import React, { useState, useEffect } from "react";
import WalletBalance from "./components/WalletBalance";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseTrends from "./components/ExpenseTrends";
import "./App.css";

const App = () => {
  const [balance, setBalance] = useState(() => {
    return parseFloat(localStorage.getItem("walletBalance")) || 5000;
  });

  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  // Persist data to localStorage whenever balance or expenses change
  useEffect(() => {
    localStorage.setItem("walletBalance", balance);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [balance, expenses]);

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <WalletBalance balance={balance} setBalance={setBalance} />
      <ExpenseForm balance={balance} setBalance={setBalance} setExpenses={setExpenses} expenses={expenses} />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} setBalance={setBalance} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseTrends expenses={expenses} />
    </div>
  );
};

export default App;
// This code defines the main App component of an expense tracker application.
