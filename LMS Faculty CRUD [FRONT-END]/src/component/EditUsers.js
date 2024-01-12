import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';


export const EditUsers = () => {

    let navigate=useNavigate();

    const { id } = useParams();

    const [product,setProduct]=useState({
        faculty_name:"",
        faculty_role:"",
        faculty_mobile:"",
        email:"",
        password:"",
        password2:""
    });

    //const{faculty_name,faculty_role,faculty_mobile,email,password,password2}=product;

    const onInputChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value});
    }


    const [passwordVisible, setPasswordVisible] = useState(false);
    const [roles, setRoles] = useState([]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


    const validateForm = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobilePattern = /^\d{10}$/;
    
        if (!product.faculty_name) {
          window.alert("Please enter your name.");
          return false;
        }
        if (product.faculty_role==="Admin" ) {
          window.alert("Please choose another role.");
        return false;
      }

      if (product.faculty_role==="select your role" ) {
        window.alert("choose your role.");
      return false;
    }
    
        if (!product.faculty_role) {
            window.alert("Please enter your role.");
          return false;
        }
    
        if (!product.faculty_mobile || !mobilePattern.test(product.faculty_mobile)) {
          window.alert("Please enter a valid 10-digit mobile number.");
          return false;
        }
    
        if (!product.email || !emailPattern.test(product.email)) {
          window.alert("Please enter a valid email address.");
          return false;
        }
    
        if (!product.password || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}/.test(product.password)) {
          window.alert("Password must contain at least 8 characters including uppercase, lowercase, numbers, and special characters.");
          return false;
        }
    
        if (product.password !== product.password2) {
          window.alert("Passwords do not match.");
          return false;
        }
    
        return true;
      };

    
    useEffect(() => {
        axios.get(`http://localhost:8080/getuserbyid/${id}`)
          .then((res) => {
            console.log(res.data);
            setProduct(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }, [id]);
    
    
      const updateProduct = (event) => {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
          }

        const confirmed = window.confirm(`Are you sure you want to submit the details?`);
        
        if (!confirmed) {
             return; // If not confirmed, do nothing
        }

        axios.put(`http://localhost:8080/update/${id}`, product)
          .then(() => {
            
            window.alert(`${product.faculty_name} details Updated Successfully!..`);
            
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
          });
      };
    
      useEffect(() => {
        const fetchRoles = async () => {
          try {
            const response = await axios.get("http://localhost:8080/allrole"); // Adjust the endpoint
            setRoles(response.data); // Assuming the roles are in the response data
          } catch (error) {
            console.error("Error fetching roles:", error);
          }
        };
    
        fetchRoles();
      }, []); 

      const isInstallment=product.faculty_role==="Faculty";
   
    return (
        <div >
             <div className='container-fluid'>
  <div className='row'>
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h2 className="text-center m-2">Edit Users</h2>
      <form className='form-group' onSubmit={(e)=>updateProduct(e)}>
          <div className="form-group col-md-12">
            <label htmlFor="faculty_name">Enter your Name:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your name'
              name='faculty_name'
              value={product.faculty_name}
              onChange={(e)=>onInputChange(e)}
            />
          </div><br/>
          <div className="form-group col-md-12">
            <label htmlFor="faculty_role">Enter Your Role:</label>
            <select
              name='faculty_role'
              value={product.faculty_role}
              onChange={(e)=>onInputChange(e)}
              className='form-control'
            >
              <option>Select your role</option>
              {roles.map((role) => (
                <option key={role.roleid}>{role.rolename}</option>
              ))}
            </select>
          </div>

          {isInstallment && (
            
        <div className="form-group col-md-12"><br/>
          <label htmlFor="faculty_courses">Enter your teaching courses:</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter your teaching Courses'
            name='faculty_courses'
            value={product.faculty_courses}
            onChange={(e)=>onInputChange(e)}
          />
        </div>
        )}
        <br/>
        <div className="form-group col-md-12">
          <label htmlFor="faculty_mobile">Enter your Mobile:</label>
          <input
            type='tel'
            className='form-control'
            placeholder='+91 enter your Number'
            name='faculty_mobile'
            value={product.faculty_mobile}
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
            value={product.email}
            onChange={(e)=>onInputChange(e)}
          />
        </div><br/>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="password">Create your Password:</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className='form-control'
              placeholder='Create your password'
              name='password'
              value={product.password}
              onChange={(e)=>onInputChange(e)}
            />

          </div><br/>

          <div className="form-group col-md-12">
            <label htmlFor="password2">Confirm your Password:</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className='form-control'
              placeholder='Confirm your password'
              name='password2'
              value={product.password2}
              onChange={(e)=>onInputChange(e)}
            />
            <span
              onClick={togglePasswordVisibility}
              className="password-toggle" 
              style={{
                position: 'absolute',top: '547px',right: '365px', // Adjust the right position as needed
                backgroundColor:'#FFFFFF'}}>
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
              value={product.dob}
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
              value={product.qualification}
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
            value={product.faculty_address}
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
            value={product.zipcode}
            onChange={(e)=>onInputChange(e)}
          />
        </div><br/>

        <div className='text-center'>
          <button type='submit' className='btn btn-primary'>Submit</button>&nbsp;&nbsp;
          <Link to="/" className='btn btn-danger ml-2'>Cancel</Link>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    )
}
