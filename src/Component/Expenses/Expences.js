import { useState } from "react";
import ExpencesItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expences(props) {
  const [filterYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>

        {/* <ExpencesItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}/>


      <ExpencesItem  title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}/>


      <ExpencesItem  title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}/>

      <ExpencesItem  title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}/> */}
      </Card>
    </div>
  );
}
export default Expences;
