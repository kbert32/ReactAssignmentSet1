import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  
  function saveExpenseDataHandler(enteredExpenseData) {     //function that allows communication from child
    const expenseData = {                                   //to parent component: Expenseform -> NewExpense
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;