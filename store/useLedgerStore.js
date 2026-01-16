import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

// {
// id:uuidv4,
// date :today
//       description: "",
//       amount: "",
//       type: "expense || income ",
//     },
const useLedger = create((set) => ({
  transactions: [],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [
        { id: uuidv4(), date: new Date().toISOString(), ...transaction },
        ...state.transactions,
      ],
    })),
  deleteTransaction: (id) => {
    set((state) => ({
      transactions: state.transactions.filter((tObj) => tObj.id !== id),
    }));
  },
}));
