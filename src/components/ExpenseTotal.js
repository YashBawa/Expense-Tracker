import React,{useContext} from 'react'
import { AppContext } from "../context/AppContext";

const design = {
  backgroundColor:'#ff6f6a',
  borderRadius :'5%',
  padding:'5px'
}

export default function ExpenseTotal() {
  const {expenses}=useContext(AppContext);
  const totalexpenses = expenses.reduce((total,item)=>{
    return(total=total+parseInt(item.cost));
    },0);
  return (
    <div className='alert alert-danger'>
      <span style={design}>Money Spent:${totalexpenses}</span>
    </div>
  )
}
