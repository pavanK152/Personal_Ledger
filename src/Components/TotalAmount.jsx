import React, { useEffect, useState } from "react";
import { useLedgerStore } from "../../store/useLedgerStore";

const TotalAmount = () => {
  const [summaryObj, setSummaryObj] = useState({});
  const transaction = useLedgerStore((state) => state.transactions);
  const summary = useLedgerStore((state) => state.totalSummary);

  useEffect(() => {
    setSummaryObj(summary());
  }, [transaction]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Total Balance */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <p className="text-gray-500 text-sm">Total Balance</p>
        <p className="text-2xl font-bold text-gray-800">
          ₹{summaryObj.total || 0}
        </p>
      </div>

      {/* Total Income */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <p className="text-gray-500 text-sm">Total Income</p>
        <p className="text-2xl font-bold text-green-500">
          +₹{summaryObj.totalIncome || 0}
        </p>
      </div>

      {/* Total Expense */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <p className="text-gray-500 text-sm">Total Expenses</p>
        <p className="text-2xl font-bold text-red-500">
          -₹{summaryObj.totalExpense || 0}
        </p>
      </div>
    </div>
  );
};

export default TotalAmount;
