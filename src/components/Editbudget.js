import React ,{useState} from 'react';

const Editbudget=(props)=>{
    const [value,setdata]=useState(props.budget);

  return (
    <div>
       <input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setdata(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handlesaveclick(value)}
			>
				Save
			</button>
    </div>
  )
}
export default Editbudget;