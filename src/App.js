
import React from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import Budget from "./components/Budget";
import ExpensesList from "./components/ExpensesList";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import {AppProvider} from "./context/AppContext";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
  crossorigin="anonymous"
></link>;

export default function App() {
  return (
    <div className="content">
    <AppProvider >
      <div className="container">
        <h1 className="mt-3 font-family: 'Oswald'"><u>Expense Tracker</u></h1>
        <div className="row mt-3">
          <div className="col-sm-4">
            <Budget />
          </div>
          <div className="col-sm-4">
            <Remaining />
          </div>
          <div className="col-sm-4">
            <ExpenseTotal />
          </div>
        </div>
        <h3 class="mt-3"><u>Expenses</u></h3>
        <div class="row ">
          <div class="col-sm-8 d-flex justify-content:center px-5">
            <ExpensesList />
          </div>
        </div>
        <h3 className="mt-3"><u>Add Expense</u></h3>
        <div className="mt-3">
          <div className="col-sm-4 mx-auto">
            <AddExpenseForm />
          </div>
        </div>
        {/* footer to be added */}
      </div>
    </AppProvider>
    </div>
  );
}
