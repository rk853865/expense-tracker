import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffbb28", "#ff8042"];

const ExpenseSummary = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.price;
    return acc;
  }, {});

  const data = Object.keys(categoryTotals).map((category, index) => ({
    name: category,
    value: categoryTotals[category],
    color: COLORS[index % COLORS.length],
  }));

  return (
    <div>
      <h2>Expense Summary</h2>
      {data.length > 0 ? (
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <p>No expenses to show</p>
      )}
    </div>
  );
};

export default ExpenseSummary;
// This component displays a pie chart summarizing expenses by category.