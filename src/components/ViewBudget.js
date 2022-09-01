import React from 'react'
const design = {
    backgroundColor:'lightgreen',
    borderRadius :'5%',
    padding:'5px'
  }

export default function ViewBudget(props) {
  return (
    <div>
       <span style={design} >Budget:${props.budget}<button 
       onClick={() => props.handleditclick()}
       type='button'
       >
       Edit
       </button></span> 
    </div>
  );
};
