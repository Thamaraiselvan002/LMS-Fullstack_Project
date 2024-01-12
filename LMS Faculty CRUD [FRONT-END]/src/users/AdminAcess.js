import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function AdminAcess() {
    let navigate=useNavigate();
    const[UserAdmin,SetUserAdmin]=useState([])
    
    useEffect(() => {
        AdminAcess();
    }, []);

    const AdminAcess=async()=>{
        try {
            const result = await axios.get("http://localhost:8080/#####");
            SetUserAdmin(result.data); 
            navigate("/admindashboard")
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    return(
        <div>
           <Link to='/rolemanagement' className='btn btn-primary'>Rolemanagement</Link><br/><br/>
           <Link to='/usermanagement' className='btn btn-primary'>usermanagement</Link><br/><br/>
            <Link to='/fees' className='btn btn-primary'>fees</Link><br/><br/>
            <Link to='/alumni' className='btn btn-primary'>Almuni</Link><br/><br/>
            <Link to='/librarymanagement' className='btn btn-primary'>library</Link><br/><br/>
            <Link to='/studentcourses' className='btn btn-primary'>Studentcourses</Link><br/><br/>
        </div>
    )
}