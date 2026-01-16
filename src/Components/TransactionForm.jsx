import React from "react";
import { Plus } from "lucide-react";

const TransactionForm = () => {
  return (
    <div>
      <div>
        <label htmlFor="des">Description</label>
        <input className="border-red-200 border-2" id="desc" type="text" />
      </div>
      <div>
        <label htmlFor="des">Amount</label>
        <input className="border-red-200 border-2" id="amount" type="text" />
      </div>
      <div>
        <label htmlFor="expense">Expense</label>
        <input id="expense" type="radio" value="Expense" />
        <label htmlFor="income">Income</label>
        <input id="income" type="radio" value="Income" />
      </div>
      <button>
        <Plus height={12} />
        Add Transaction
      </button>
    </div>
  );
};

export default TransactionForm;
