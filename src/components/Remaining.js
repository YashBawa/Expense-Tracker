import React,{useContext} from "react";
import { AppContext } from "../context/AppContext";

const design = {
  backgroundColor:'#ffff70',
  borderRadius :'5%',
  padding:'5px'
}
export default function Remaining() {
  const {expenses,budget}=useContext(AppContext);
  const totalexpenses = expenses.reduce((total,item)=>{
    return(total=total+parseInt(item.cost));
    },0);
  return (  
    <div className="alert alert-warning">
      <span style={design} className="remaining">Left Amount:${budget-totalexpenses}</span>
    </div>
  );
}
