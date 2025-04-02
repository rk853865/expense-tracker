import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const ExpenseTrends = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, { category, price }) => {
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});

  const data = Object.keys(categoryTotals).map(category => ({
    name: category,
    value: categoryTotals[category],
  }));

  return (
    <div className="chart-container">
      <h2>Expense Trends</h2>
      <BarChart width={300} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default ExpenseTrends;
// This component displays a bar chart summarizing expenses by category using Recharts.