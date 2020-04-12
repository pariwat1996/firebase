import React from 'react';
import './Task.css'

export default (props)=> {
    const {task, editTask, deleteTask} = props;
    const {id,productid,name} = task
    return ( 
        <li > 
            <div className="id">NO.{id}</div>
            <div className="productid">ID.{productid}</div>
            <div className="name">Name.{name}</div>
            <div className='bt-container'>
                <button className="green" onClick={ ()=> deleteTask(id)} >Delete</button>
                <button className="red" onClick={ ()=> editTask(id)} >Edit</button>
            </div>
        </li>
      )
}