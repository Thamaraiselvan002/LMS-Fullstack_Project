import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const AddRole = () => {

    let navigate=useNavigate();
    const[role,SetRole]=useState({
        rolename:"",
        roledescription:"",
    });
    const{rolename,roledescription}=role;

    const onInputChange=(e)=>{
        SetRole({...role,[e.target.name]:e.target.value});
    }


    const validateRoleForm = () => {
        const roleNamePattern = /^[a-zA-Z\s]+$/;
      
        if (!rolename || !roleNamePattern.test(rolename)) {
          window.alert("Please enter a valid role name.");
          return false;
        }
      
        if (!roledescription) {
          window.alert("Please enter a role description.");
          return false;
        }
      
        return true;
      };

    const onsubmit=async (e)=>{
        e.preventDefault();

        if (!validateRoleForm()) {
            return;
          }
        await axios.post("http://localhost:8080/add",role)
          .then((res) => {
            console.log(res.data);
         })
        window.alert("role added succesfully");
        navigate("/");
    }

    

    return (
    <div >
         <div >
        <div className='container-fluid'>
  <div className='row'>
    <div className="col-md-4 offset-md-4 border rounded  mt-5 shadow">
      <h2 className="text-center m-4">Add Role</h2>
      <form className='form-group' onSubmit={(e)=>onsubmit(e)}>
          <div className="form-group col-md-12">
            <label htmlFor="faculty_name"> create your Role:</label>
            <input type='text'  className ='form-control' 
                            placeholder ='create your role' name="rolename" value={rolename} 
                            onChange={(e)=>onInputChange(e)} ></input>
          </div><br/>
          <div className="form-group col-md-12">
            <label htmlFor="faculty_role">Enter Your Role:</label>
            <input type='text'  className ='form-control' 
                            placeholder ='create your desicription' name="roledescription" value={roledescription} 
                            onChange={(e)=>onInputChange(e)}></input>
          </div><br/>
          <div  className='text-center'>
          <button type='submit' className='btn btn-primary  '>Submit</button> &nbsp;&nbsp;
            <Link to="/" className='btn btn-danger'>Cancel</Link>
          </div><br/>
          </form>
        </div><br/>
       
        
        </div>
        </div>
        </div>
    </div>
    )
}
