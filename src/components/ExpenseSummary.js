import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const ExpenseSummary = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, { category, price }) => {
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});

  const data = Object.keys(categoryTotals).map(category => ({
    name: category,
    value: categoryTotals[category],
  }));

  const COLORS = ["#FF5733", "#33FF57", "#3357FF"];

  return (
    <div className="chart-container">
      <h2>Expense Summary</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
          {data.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ExpenseSummary;
// This component displays a pie chart summarizing expenses by category using Recharts.