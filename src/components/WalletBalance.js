import React from "react";

const WalletBalance = ({ balance, setBalance }) => {
  const handleAddIncome = () => {
    const income = parseFloat(prompt("Enter income amount:"));
    if (!isNaN(income) && income > 0) {
      setBalance(prevBalance => prevBalance + income);
    }
  };

  return (
    <div className="wallet-balance-container">
      <h2>Wallet Balance: ${balance.toFixed(2)}</h2>
      <button className="add-income-btn" onClick={handleAddIncome}>+ Add Income</button>
    </div>
  );
};

export default WalletBalance;
// This component displays the wallet balance and provides a button to add income.