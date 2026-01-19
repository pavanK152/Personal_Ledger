import React from "react";
import TransactionForm from "./Components/TransactionForm";
import TransactionList from "./Components/TransactionList";
import TotalAmount from "./Components/TotalAmount";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">My Ledger</h1>

      {/* TOP SUMMARY CARDS */}
      <TotalAmount />

      {/* FORM + LIST */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT */}
          <TransactionForm />

          {/* RIGHT */}
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default App;
