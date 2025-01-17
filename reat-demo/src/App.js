import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App= () => {
  const [item,setItem]=useState([]);
  const [newtask,setNewtask]=useState('');
  useEffect(()=>{
    axios.get('http://localhost:5000/getallbrands').then(
      arr=>setItem(arr.data)
      )

  },[])
  const submitHandler = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/addbrands',{brandname:newtask}).then(
      arr=>setItem(arr.data)
    )
  }
  const deleteHandler= id =>{
    axios.delete(`http://localhost:5000/deletebrand/${id}`).then(
      arr=>setItem(arr.data)
    )
  }
  return(
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type = "text" value={newtask} onChange={(e)=>setNewtask(e.target.value)}/>
          <input type = "submit" value= "submit"/>
          </form><br />
        {item.map(task=>
        <div key={task._id}>
          <h3>{task.brandname}  </h3><button onClick={()=>deleteHandler(task._id)}>Delete</button>
        </div>)}
      </center>
    </div>
  )

}
export default App;