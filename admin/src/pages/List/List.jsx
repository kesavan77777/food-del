import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from "react-toastify"
const List = ({url}) => {
  //const url="http://localhost:4000"
  const [list,setList]=useState([]);

  const fetchList=async ()=>{
    const response=await axios.get(`${url}/api/food/list`);

  // console.log(response.data.data);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
       toast.error("error");
    }
  }
    const removeFood=async(foodId)=>{
     //console.log(foodId);

     const response=await axios.post(`${url}/api/food/remove`,{id:foodId});
     await fetchList();
     if(response.data.success){
      toast.success("removed succeffully")
     }
     else{
      toast.error("error");
     }
    }
  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className='list add flex-col'>
      <p>All foods list</p>
      <div className="list-table">
        <div className="list-table-format      title">
          <b>image</b>
          <b>name</b>
          <b>category</b>
          <b>price</b>
          <b>action</b>

        </div>
        {list.map((item,index)=>{
return(
  <div  key={index} className="list-table-format">
       <img src={`${url}/images/`+item.image} alt="" />
       <p>{item.name}</p>
       <p>{item.category}</p>
       <p>${item.price}</p>
       <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
  </div>
)
        })}
      </div>
      
    </div>
  )
}

export default List
