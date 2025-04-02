import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ExpenseTrends = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.price;
    return acc;
  }, {});

  const data = Object.keys(categoryTotals).map((category) => ({
    category,
    amount: categoryTotals[category],
  }));

  return (
    <div>
      <h2>Expense Trends</h2>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>No expense data available</p>
      )}
    </div>
  );
};

export default ExpenseTrends;
// This component displays a bar chart showing the total expenses per category.