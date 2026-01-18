import React from "react";
import { useLedgerStore } from "../../store/useLedgerStore";
import { Trash2 } from "lucide-react";

const TransactionList = () => {
  const allTransaction = useLedgerStore((state) => state.transactions);
  const deleteTransaction = useLedgerStore((state) => state.deleteTransaction);

  if (allTransaction.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-500 text-center">No Transactions Yet</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4"> Transactions History</h2>

      <div className="space-y-4">
        {allTransaction.map((trans) => (
          <div
            key={trans.id}
            className="flex justify-between items-center border p-4 rounded-lg"
          >
            <div>
              <p className="font-medium">{trans.description}</p>
              <p className="text-sm text-gray-400">{trans.date}</p>{" "}
              {/* ✅ DATE */}
            </div>

            <div className="flex items-center gap-4">
              <p
                className={`font-semibold ${
                  trans.type === "expense" ? "text-red-500" : "text-green-500"
                }`}
              >
                {trans.type === "expense" ? "-" : "+"}${trans.amount}
              </p>

              <Trash2
                size={18}
                className="cursor-pointer text-gray-400 hover:text-red-500"
                onClick={() => deleteTransaction(trans.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
