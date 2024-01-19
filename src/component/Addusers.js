import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';


export const Addusers = () => {

    let navigate=useNavigate();

    const [user,setUser]=useState({
      faculty_name:"",
      faculty_role:"",
      faculty_courses:"",
      faculty_mobile:"",
      email:"",
      password:"",
      password2:"",
      dob:"",
      qualification:"",
      faculty_address:"",
      zipcode:"",
      

  });

  const{faculty_name,faculty_role,faculty_courses,faculty_mobile,email,password,password2,dob,qualification,faculty_address,zipcode}=user;

    // const onInputChange=(e)=>{
    //     setUser({...user,[e.target.name]:e.target.value});
    // }

    const [isCourseInputDisabled, setIsCourseInputDisabled] = useState(false);

    const onInputChange = (e) => {
      const { name, value } = e.target;
  
      // If the role changes, update the faculty_courses value
      if (name === 'faculty_role') {
        const defaultCourses = value === 'Faculty' ? '' : 'Non-teaching';
        setUser({ ...user, faculty_courses: defaultCourses, [name]: value });
        setIsCourseInputDisabled(value !== 'Faculty');
      } else {
        setUser({ ...user, [name]: value });
      }
    };

    const [passwordVisible, setPasswordVisible] = useState(false);


    const [roles, setRoles] = useState([]);
 

    const onPasswordVisibilityToggle = () => {
      setPasswordVisible(!passwordVisible);
    };

    const calculateAge = (dob) => {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
  
      return age;
    };
  

    const validateForm = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobilePattern = /^\d{10}$/;
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;

        const qualificationPattern = /^[a-zA-Z\s]+$/;
        //const addressPattern = /^[a-zA-Z0-9\s]+$/;
        const zipcodePattern = /^\d{6}$/;

    
        if (!faculty_name.trim()) {
          window.alert("Please enter your name.");
          return false;
        }
    
        if (faculty_role==="Admin" ) {
            window.alert("Please choose another role.");
          return false;
        }

        if (faculty_role==="Select your role" ) {
          window.alert("choose your role.");
        return false;
      }

        if (!faculty_role) {
          window.alert("choose your role.");
        return false;
      }

      if (!faculty_courses.trim()) {
        window.alert("Enter your courses.");
      return false;
    }
        if (!faculty_mobile || !mobilePattern.test(faculty_mobile)) {
          window.alert("Please enter a valid 10-digit mobile number.");
          return false;
        }
    
        if (!email.trim() || !emailPattern.test(email)) {
          window.alert("Please enter a valid email address.");
          return false;
        }
    
        if (!password || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}/.test(password)) {
          window.alert("Password must contain at least 8 characters including uppercase, lowercase, numbers, and special characters.");
          return false;
        }
    
        if (password !== password2) {
          window.alert("Passwords do not match.");
          return false;
        }

        if (!dob || !datePattern.test(dob)) {
          window.alert("Please enter a valid date of birth.");
          return false;
        }
        const age = calculateAge(dob);

       if (age < 18) {
          window.alert("You must be at least 18 years old.");
         return false;
        }
      
        if (!qualification.trim() || !qualificationPattern.test(qualification)) {
          window.alert("Please enter a valid qualification.");
          return false;
        }
      
        if (!faculty_address.trim() ) {
          window.alert("Please enter a valid street address.");
          return false;
        }
      
        if (!zipcode.trim() || !zipcodePattern.test(zipcode)) {
          window.alert("Please enter a valid 6-digit zipcode.");
          return false;
        }
    
        return true;
      };
    

    const onsubmit=async (e)=>{
        e.preventDefault();

        if (!validateForm()) {
            return;
          }
      
        const confirmed = window.confirm(`Are you sure you want to submit the details?`);
  
        if (!confirmed) {
             return; // If not confirmed, do nothing
        }
        await axios.post("http://localhost:8080/createfaculty",user)
        window.alert(`${faculty_name} details Added Successfully!..`)
        navigate("/M3")
    };

    useEffect(() => {
      const fetchRoles = async () => {
        try {
          const response = await axios.get("http://localhost:8080/allrole"); 
          setRoles(response.data);
        } catch (error) {
          console.error("Error fetching roles:", error);
        }
      };
  
      fetchRoles();
    }, []); 


    return (
      <div >
        <div className='container '>
  <div className='row p-4'>
    <div className="border rounded p-5 mt-2 shadow" style={{width:'500px',alignItems:'center',marginLeft:'24%'}} >
      <h2 className="text-center">Add Faculty</h2>
      <form className='form-group' onSubmit={(e)=>onsubmit(e)}>
          <div className="form-group col-md-12">
            <label htmlFor="faculty_name">Enter your Name:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your name'
              name='faculty_name'
              value={faculty_name}
              onChange={(e)=>onInputChange(e)}
            />
          </div><br/>
          <div className="form-group col-md-12">
            <label htmlFor="faculty_role">Enter Your Role:</label>
            <select
              name='faculty_role'
              value={faculty_role}
              onChange={(e)=>onInputChange(e)}
              className='form-control'
            >
              <option>Select your role</option>
              {roles.map((role) => (
                <option key={role.roleid}>{role.rolename}</option>
              ))}
            </select>
                </div>
            <div className="form-group col-md-12">
                  <br />
                  <label htmlFor="faculty_courses">Enter your teaching courses:</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your teaching Courses'
                    name='faculty_courses'
                    value={faculty_courses}
                    onChange={(e) => onInputChange(e)}
                    disabled={isCourseInputDisabled}
                  />
                </div><br/> 
            
            {/* {faculty_role === 'Faculty' && (
                <div className="form-group col-md-12">
                  <br />
                  <label htmlFor="faculty_courses">Enter your teaching courses:</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your teaching Courses'
                    name='faculty_courses'
                    value={faculty_courses}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              )}
          </div><br/> */}


        <div className="form-group col-md-12">
          <label htmlFor="faculty_mobile">Enter your Mobile:</label>
          <input
            type='tel'
            className='form-control'
            placeholder='+91 enter your Number'
            name='faculty_mobile'
            value={faculty_mobile}
            onChange={(e)=>onInputChange(e)}
          />
        </div><br/>

        <div className="form-group col-md-12">
          <label htmlFor="email">Enter your email:</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter your Email'
            name='email'
            value={email}
            onChange={(e)=>onInputChange(e)}
          />
        </div><br/>

        <div className="form-row">
        <div className="form-group col-md-12">
            <label htmlFor="password">Create your Password:</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className='form-control'
              placeholder='Confirm your password'
              name='password'
              value={password}
              onChange={(e)=>onInputChange(e)}/> 
           
          </div><br/>

          <div className="form-group col-md-12">
            <label htmlFor="password2">Confirm your Password:</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className='form-control'
              placeholder='Confirm your password'
              name='password2'
              value={password2}
              onChange={(e)=>onInputChange(e)}
            />
            <span onClick={onPasswordVisibilityToggle} className="password-toggle position-absolute" 
             style={{top: '760px',right: '330px', // Adjust the right position as needed
           }} >
            {passwordVisible ? <Icon icon={eyeOff} /> : <Icon icon={eye} />}
            </span>
          </div>
        </div><br/>

       
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="dob">Enter your DOB:</label>
            <input
              type='date'
              className='form-control'
              placeholder='Enter your DOB'
              name='dob'
              value={dob}
              onChange={(e)=>onInputChange(e)}
            />
          </div><br/>

          <div className="form-group col-md-12">
            <label htmlFor="qualification">Enter your qualification:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your qualification'
              name='qualification'
              value={qualification}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
        </div><br/>

        <div className="form-group">
          <label htmlFor="faculty_address">Enter your Street Address:</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter your faculty address'
            name='faculty_address'
            value={faculty_address}
            onChange={(e)=>onInputChange(e)}
          />
        </div><br/>

        <div className="form-group col-md-12">
          <label htmlFor="zipcode">Enter your zipcode:</label>
          <input
            type='tel'
            className='form-control'
            placeholder='Enter your Zipcode'
            name='zipcode'
            value={zipcode}
            onChange={(e)=>onInputChange(e)}
          />
        </div><br/>

        <div className='text-center'>
          <button type='submit' className='btn btn-primary'>Submit</button>&nbsp;&nbsp;
          <Link to="/M3" className='btn btn-danger ml-2'>Cancel</Link>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    )
}
