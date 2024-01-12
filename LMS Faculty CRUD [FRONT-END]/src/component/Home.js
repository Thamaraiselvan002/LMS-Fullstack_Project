import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {
    const [Users, SetUsers] = useState([]);
    const [Role,SetRole]=useState([]);
    const [serachName,setSearchName]=useState();
    useEffect(() => {
        loadUsers();
    }, []);

    useEffect(() => {
      allrole();
  }, []);

  
    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/getfaculty");
            SetUsers(result.data); // Assuming result contains an array of users
            console.log(result);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    
    const handleDelete = async (id) => {
      try {
        const confirmed = window.confirm(`Are you sure you want to delete ID ${id}?`);
        
        if (!confirmed) {
          return; // If not confirmed, do nothing
        }
    
        await fetch(`http://localhost:8080/deletefaculty/${id}`, {
          method: 'DELETE',
        });
        window.alert(`ID ${id} has been deleted.`);
        loadUsers(); // Refresh the user list after deletion
      } catch (error) {
        console.error(`Error deleting with ID ${id}:`, error);
      }
    };


    const allrole = async () => {
      try {
          const result1 = await axios.get("http://localhost:8080/allrole");
          SetRole(result1.data); // Assuming result contains an array of users
          console.log(result1);
      } catch (error) {
          console.error("Error fetching users:", error);
      }
  };

    const roleDelete=async (id)=>{
      try{
        const confirmedrole=window.confirm(`are you sure want to delete role`);

        if(!confirmedrole){
          return;
        }

        await fetch(`http://localhost:8080/delete/${id}`,{
          method:'DELETE',
        });
        window.alert(`role has been deleted`);
        allrole();
      }catch (error) {
        console.error(`Error deleting with ID ${id}:`, error);
      }
    };
    
    const filteredadta=Users.filter((user)=>user.faculty_name.includes(serachName));

  return (
    <div style={{backgroundColor:'#f0f0f0'}} >
    <div className='container' >
      <div className='App' >
        <div>
        <h1 >Faculty_Details</h1>
            <Link to="/adduser" style={{marginLeft:"700px",marginTop:"2px"}} 
            className='btn btn-primary'>Add Faculty</Link>
            </div>
            <input type='text' className='icon' placeholder='search the data' onChange={(e)=>setSearchName(e.target.value)}/>
        <div className='py-3 table-responsive'  >
         
        <table className="table table-hover" style={{border:'3px solid black'}}>
  <thead>
    <tr className='table table-info'  style={{border:'2px solid black'}}>
        <th >#</th>
      <th  >Faculty_ID</th>
      <th>Faculty_Name</th>
      <th >Faculty_Mobile</th>
      <th >Faculty_Role</th>
      <th >teaching_Courses</th>
      <th>Faculty_Email</th>
      <th >Password</th>
      <th >Date_of_Birth</th>
      <th >Qualifiaction</th>
      <th >FacultyAddress</th>
      <th >zipcode</th>
      <th>Edit</th>
      <th>update</th>
    </tr>
  </thead>
  <tbody >
  
        {filteredadta.map((user, index) => (
            <tr  key={user.faculty_id}>
               
                <th >{index+1}</th>
                <td >{user.faculty_id}</td>
                <td >{user.faculty_name}</td>
                <td >{user.faculty_mobile}</td>
                <td >{user.faculty_role}</td>
                <td >{user.faculty_courses}</td>
                <td >{user.email}</td>
                <td >{user.password}</td>
                <td >{user.dob}</td>
                <td >{user.qualification}</td>
                <td >{user.faculty_address}</td>
                <td >{user.zipcode}</td>
                <td >
                    <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.faculty_id}`}>Edit</Link>
                    </td>
                    <td><button className='btn btn-outline-danger mx-2' 
                    onClick={() => handleDelete(user.faculty_id)}>Delete</button>
                </td> 
             </tr>
        ))
    }
    
    {/*orginal one  {
       
        Users.map((user,index)=>(
            <tr  key={user.faculty_id}>
               
                <th >{index+1}</th>
                <td >{user.faculty_id}</td>
                <td >{user.faculty_name}</td>
                <td >{user.faculty_mobile}</td>
                <td >{user.faculty_role}</td>
                <td >{user.faculty_courses}</td>
                <td >{user.email}</td>
                <td >{user.password}</td>
                <td >{user.dob}</td>
                <td >{user.qualification}</td>
                <td >{user.faculty_address}</td>
                <td >{user.zipcode}</td>
                <td >
                    <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.faculty_id}`}>Edit</Link>
                    </td>
                    <td><button className='btn btn-outline-danger mx-2' 
                    onClick={() => handleDelete(user.faculty_id)}>Delete</button>
                </td> 
             </tr>
        ))
    } */}
  </tbody>
</table>
</div>

<div  >
        <h1 style={{marginTop:"30px"}}>Roles</h1>
        <Link to="/addrole" style={{marginLeft:"700px",marginTop:"2px"}} 
            className='btn btn-primary'>Add Role</Link>
            </div>

<div className='py-3 table-responsive'  >
        <table className="table table-hover" style={{border:'3px solid black'}}>
  <thead>
    <tr className='table table-info'  style={{border:'2px solid black'}}>
        <th >#</th>
      <th  >Role_ID</th>
      <th>Role_Name</th>
      <th >Role_Description</th>
      <th >###</th>
    </tr>
  </thead>
  <tbody >
    {
        Role.map((role,index)=>(
            <tr  key={role.faculty_id}>
               
                <th >{index+1}</th>
                <td >{role.roleid}</td>
                <td >{role.rolename}</td>
                <td >{role.roledescription}</td>
                    <td><button className='btn btn-outline-danger mx-2' 
                    onClick={() => roleDelete(role.roleid)}>Delete</button>
                </td> 
             </tr>
        ))
    }
  </tbody>
</table>
</div>

        </div>
        </div>
        </div>
  )
}