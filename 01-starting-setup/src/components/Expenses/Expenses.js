import {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
    
    const [filterDate, setFilterDate] = useState('');
    
    const filteredProps = filterDate ? props.item.filter(obj => obj.date.getFullYear() === Number(filterDate)) : [...props.item];
    
    function onFilterChangeHandler(e) {
        setFilterDate(e.target.value);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={onFilterChangeHandler} />
                <ExpensesChart expenses={filteredProps} />
                <ExpensesList arr={filteredProps} />
            </Card>
        </div>
    );
};

export default Expenses;