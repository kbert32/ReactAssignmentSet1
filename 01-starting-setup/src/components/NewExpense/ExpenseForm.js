import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [showForm, setShowForm] = useState(false);

    // const [userInput, setUserInput] = useState({             using 'single state' approach
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    function titleChangeHandler(e) {
        setEnteredTitle(e.target.value);

        // setUserInput({                                       when using 'single state' approach
        //     ...userInput,                                    **do not use this approach if 
        //     enteredTitle: e.target.value,                    your state update depends on the 
        // });                                                  previous state

        // setUserInput((prevState) => {                                when using 'single state' approach
        //     return {...prevState, enteredTitle: e.target.value};     use this approach if your state update
        // });                                                          depends on the previous state
    };

    function amountChangeHandler(e) {
        setEnteredAmount(e.target.value);
    };

    function dateChangeHandler(e) {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (enteredTitle && enteredAmount && enteredDate) {
            const expenseData = {
                title: enteredTitle,
                amount: +enteredAmount,
                date: new Date(enteredDate.split('-'))
            };
            
            props.onSaveExpenseData(expenseData);
            hideForm();
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        }
    };

    function hideForm() {
        setShowForm(!showForm);
    };

    if (!showForm) {
        return (
            <div>
                <button type='button' onClick={hideForm}>Add New Expense</button>
            </div>
        )
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='.01' step='.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={hideForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;