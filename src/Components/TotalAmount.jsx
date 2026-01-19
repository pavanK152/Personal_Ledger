import React, { useEffect, useState } from "react";
import { useLedgerStore } from "../../store/useLedgerStore";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const TotalAmount = () => {
  const [summaryObj, setSummaryObj] = useState({});
  const transaction = useLedgerStore((state) => state.transactions);
  const summary = useLedgerStore((state) => state.totalSummary);

  const [activeIndex, setActiveIndex] = useState(-1);

  const data = [
    {
      name: "Income",
      value: summaryObj.totalIncome,
    },
    {
      name: "Expense",
      value: summaryObj.totalBalance,
    },
  ];

  const COLORS = ["#00FF00", "#FF0000"];
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setSummaryObj(summary());
  }, [transaction]);

  return (
    <div className="w-full max-w-6xl mx-auto mb-10">
      {/* Top cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Balance */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-lg text-xl">
            💼
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Balance</p>
            <h2 className="text-xl font-semibold">
              ₹{summaryObj.totalBalance || 0}
            </h2>
          </div>
        </div>

        {/* Income */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
          <div className="bg-green-100 text-green-600 p-3 rounded-lg text-xl">
            ⬆
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Income</p>
            <h2 className="text-xl font-semibold text-green-600">
              +₹{summaryObj.totalIncome || 0}
            </h2>
          </div>
        </div>

        {/* Expense */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
          <div className="bg-red-100 text-red-600 p-3 rounded-lg text-xl">
            ⬇
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Expenses</p>
            <h2 className="text-xl font-semibold text-red-500">
              -₹{summaryObj.totalExpense || 0}
            </h2>
          </div>
        </div>
      </div>

      {/* Chart section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Overview</h3>

        <div className="flex justify-center">
          <PieChart width={350} height={350}>
            <Pie
              activeIndex={activeIndex}
              data={data}
              dataKey="value"
              innerRadius={80}
              outerRadius={130}
              onMouseEnter={onPieEnter}
              style={{ cursor: "pointer", outline: "none" }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default TotalAmount;
