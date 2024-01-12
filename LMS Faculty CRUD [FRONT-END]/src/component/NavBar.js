import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import { Addusers } from './Addusers'
import { EditUsers } from './EditUsers'
import { AddRole } from './AddRole'



export default function NavBar() {
  return (
    <div >
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/adduser" element={<Addusers/>} />
          <Route path="/edituser/:id" element={<EditUsers/>} />
         <Route path='/addrole' element={<AddRole/>}/>
          {/* <Route path="/" element={<Home/>}/>
          <Route path='/admin' element={<AdminAcess/>}/>
          <Route path='/faculty' element={<FacultyAcess/>}/>
          <Route path='/student' element={<StudentAcess/>}/> */}

        </Routes>
        </BrowserRouter>
      
    </div>
  )
}
