import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import WalletBalance from "./components/WalletBalance";
import { SnackbarProvider } from "notistack";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseTrends from "./components/ExpenseTrends";

function App() {
  const [walletBalance, setWalletBalance] = useState(
    Number(localStorage.getItem("walletBalance")) || 5000
  );
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  useEffect(() => {
    localStorage.setItem("walletBalance", walletBalance);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [walletBalance, expenses]);

  const addExpense = (expense) => {
    if (expense.price > walletBalance) {
      alert("Insufficient balance!");
      return;
    }
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.price);
  };

  const deleteExpense = (id, price) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
    setWalletBalance(walletBalance + price);
  };

  const addIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="container">
        <h1>Expense Tracker</h1>
        <WalletBalance balance={walletBalance} addIncome={addIncome} />
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        <ExpenseSummary expenses={expenses} />
        <ExpenseTrends expenses={expenses} />
      </div>
    </SnackbarProvider>
  );
}

export default App;

