import React,{createContext , useReducer} from 'react'
import { v4 as uuidv4 } from 'uuid';

const AppReducer =(state,action)=>{
    switch(action.type){
        case 'add-expense':
            return {
                ...state,
                expenses:[...state.expenses,action.payload]
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };    
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        default :
        return state ;
    }
}

const initialstate = {
    budget:4000,
    expenses :[
        {id:12,name:'Food',cost:'20'},
    {id:14 ,name:'Shopping',cost:'500'},
    {id:57,name:"Insurance",cost:"100"}
],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state , dispatch] = useReducer (AppReducer,initialstate) ;
    return (<AppContext.Provider 
    value={{
        budget:state.budget,
        expenses:state.expenses,
        dispatch,
    }}
    >
    {props.children}
    </AppContext.Provider>)
}