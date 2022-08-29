import React,{useContext} from 'react';
import ExpenseItem from './ExpenseItem';    
import { AppContext } from '../context/AppContext';

const ExpensesList = () => {
    const {expenses} = useContext(AppContext);
    // const expenses = [
    //     {id:'1254',name:'shopping',cost:'500'},
    //     {id:'1244',name:'Savings',cost:'50'},
    //     {id:'1274',name:'Food',cost:'100'},
    // ];
    return (
        <ul class='list-group'>
            {expenses.map((expense)=>(
                <ExpenseItem
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            ))}
        </ul>
    )
};

export default ExpensesList;