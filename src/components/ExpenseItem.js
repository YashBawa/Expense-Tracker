import React,{useContext} from "react";
import { TiDelete } from "react-icons/ti";
import {AppContext} from '../context/AppContext' 

const ExpenseItem = (props) => {
  const {dispatch}=useContext(AppContext);

  const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};  
  return (
    <li class="list-group-item ">
      <div className='.align-items-sm-baseline'>
        {props.name}
        <span className="btn btn-primary mx-3 " >
          ${props.cost} 
        </span>
        <TiDelete size="1.5rem" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
};
export default ExpenseItem;
