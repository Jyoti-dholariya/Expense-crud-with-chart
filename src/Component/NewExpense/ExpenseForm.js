import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enterdTitle, setEnterdTitle] = useState('')
    const [enterdAmount, setEnterdAmont] = useState('');
    const [enterdDate, setEnterdDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enterdTitle:"",
    //     enterdAmount:"",
    //     enterdDate:"",
    // });

const titleChangeHandler = (e) => {
    setEnterdTitle(e.target.value);
    //  setUserInput({
    //     ...userInput,
    //     enterdTitle: e.target.value,
    //  });
//     setUserInput((prevState)=>{
//   return{...prevState, enterdTitle: e.target.value};
//     })
}

const amountChangeHandler = (e) => {
    setEnterdAmont(e.target.value);
    //  setUserInput({
    //     ...userInput,
    //     enterdAmount: e.target.value,
    //  });
}

const dateChangeHandler = (e) => {
setEnterdDate(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdDate: e.target.value,
    //  });
}

const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
       title: enterdTitle,
       amount: enterdAmount,
       date: new Date(enterdDate)
    }
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnterdTitle('');
    setEnterdAmont('');
    setEnterdDate('');
}

  return<form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div>
            <label>Title</label>
            <input type="text" value={enterdTitle} onChange={titleChangeHandler}/>
        </div>

        <div>
            <label>Amount</label>
            <input type="number" value={enterdAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>
        </div>

        <div>
            <label>Date</label>
            <input type="date" value={enterdDate} onChange={dateChangeHandler}  min="2019-01-01" max="2022-31-12"/>
        </div>

        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </div>
  </form>
}

export default ExpenseForm
