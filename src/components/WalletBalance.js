import React, { useState } from "react";

const WalletBalance = ({ balance, addIncome }) => {
  const [income, setIncome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!income || income <= 0) return;
    addIncome(Number(income));
    setIncome("");
  };

  return (
    <div>
      <h2>Wallet Balance: ${balance}</h2>
      <button type="button" onClick={() => document.getElementById("incomeForm").style.display = "block"}>
        + Add Income
      </button>
      <form id="incomeForm" style={{ display: "none" }} onSubmit={handleSubmit}>
        <input type="number" placeholder="Income Amount" value={income} onChange={(e) => setIncome(e.target.value)} />
        <button type="submit">Add Balance</button>
      </form>
    </div>
  );
};

export default WalletBalance;
// This component displays the wallet balance and allows the user to add income.