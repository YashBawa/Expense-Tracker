import React ,{useState} from 'react'
const Editbudget=(props)=>{
    const [data,setdata]=useState(false);

  return (
    <div>
       <input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={data}
				onChange={(event) => setdata(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handlesaveclick(data)}
			>
				Save
			</button>
    </div>
  )
}
export default Editbudget;