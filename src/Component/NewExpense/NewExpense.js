import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
const saveExpanseDataHandler = (enterdExpenseData) => {
 const expenseData ={
  ...enterdExpenseData,
  id: Math.random().toString()
 };
//  console.log(expenseData)
 props.onAddExpense(expenseData);
}

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpanseDataHandler}/>
    </div>
  )
}

export default NewExpense
