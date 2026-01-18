import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useLedgerStore } from "../../store/useLedgerStore";

const TransactionForm = () => {
  const addTransaction = useLedgerStore((state) => state.addTransaction);
  const allTransaction = useLedgerStore((state) => state.transactions);
  const [currTransaction, setCurrTransaction] = useState({
    description: "",
    amount: 0,
    type: "expense",
  });
  console.log("allTransactions", allTransaction);
  function handleAddTransaction() {
    // thsi is add transaction in the store
    addTransaction({
      description: currTransaction.description,
      amount: parseFloat(currTransaction.amount),
      type: currTransaction.type,
    });
    // use to clear the form
    setCurrTransaction({
      description: "",
      amount: 0,
      type: "expense",
    });
    console.log("allTransactions", useLedgerStore.getState().transactions);
  }
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Add Transaction</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="des" className="text-sm font-medium text-gray-600">
          Description
        </label>
        <input
          onChange={(event) => {
            setCurrTransaction({
              ...currTransaction,
              description: event.target.value,
            });
          }}
          value={currTransaction.description}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          id="des"
          type="text"
          placeholder="Enter description"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="amount" className="text-sm font-medium text-gray-600">
          Amount
        </label>
        <input
          value={currTransaction.amount}
          onChange={(event) => {
            setCurrTransaction({
              ...currTransaction,
              amount: event.target.value,
            });
          }}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          id="amount"
          type="number"
          placeholder="Enter amount"
        />
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-gray-600">
          <input
            checked={currTransaction.type === "expense"}
            value="expense"
            onChange={(event) => {
              setCurrTransaction({
                ...currTransaction,
                type: "expense",
              });
            }}
            type="radio"
            name="type"
          />
          Expense
        </label>

        <label className="flex items-center gap-2 text-gray-600">
          <input
            checked={currTransaction.type === "income"}
            value="income"
            onChange={(event) => {
              setCurrTransaction({
                ...currTransaction,
                type: "income",
              });
            }}
            type="radio"
            name="type"
            value="Income"
          />
          Income
        </label>
      </div>

      <button
        onClick={handleAddTransaction}
        className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
      >
        <Plus size={16} />
        Add Transaction
      </button>
    </div>
  );
};

export default TransactionForm;
