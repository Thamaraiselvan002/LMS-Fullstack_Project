
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';


export default function FacultyAcess() {
    let navigate=useNavigate();
    const[UserFaculty,SetUserFaculty]=useState([])
    
    useEffect(() => {
        FacultyAcess();
    }, []);

    const FacultyAcess=async()=>{
        try {
            const result = await axios.get("http://localhost:8080/#####");
            SetUserFaculty(result.data); 
            navigate("/facultydashboard")

        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    return(
        <div>
            <Link to='/fees' className='btn btn-primary'>fees</Link><br/><br/>
            <Link to='/alumni' className='btn btn-primary'>Almuni</Link><br/><br/>
            <Link to='/librarymanagement' className='btn btn-primary'>library</Link><br/><br/>
            <Link to='/studentcourses' className='btn btn-primary'>Studentcourses</Link><br/><br/>
        </div>
    )
}