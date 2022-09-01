import React,{useContext,useState} from 'react';
import { AppContext } from '../context/AppContext';
import Editbudget from './Editbudget';
import ViewBudget from './ViewBudget';

export default function Budget() {
  const {budget,dispatch} = useContext(AppContext);
  const {edit,setedit}=useState(false);

  // function for handling click 
  const handleditclick = ()=>{
    setedit(true);
  };

  // another function for saving the changed values 
  const handlesaveclick = (value) => {
    dispatch ({
        type:'SET_BUDGET',
        payload:value,
      }
    );
    setedit(false);
    };

  return(
      <div className='alert alert-success '>
      {edit?(<Editbudget handlesaveclick={handlesaveclick} budget={budget}/>
      ):(
      <ViewBudget handleditclick={handleditclick} budget={budget}/>
        )}
    </div>
  );
}
