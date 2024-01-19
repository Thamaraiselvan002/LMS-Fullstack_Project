
import './App.css';
//import NavBar from './component/NavbarRole';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
//import AdmSideNav from './component/AdminConsole/AdmSideNav';
import AdmSideNavRoute from './component/AdminConsole/AdmSideNavRoute';
import Footer from './component/Footer';
import NavbarAdmin from './component/NavbarAdmin';
//import NavbarRole from './component/NavbarRole';




function App() {
  return (
    <div>
      {/* <Addusers/> */}
      {/* <EditUsers/> */}
      {/* <NavbarRole/> */}
{/* <AddRole/> */}
{/* <PasswordInputWithEye /> */}

    <Navbar></Navbar>
<NavbarAdmin></NavbarAdmin>
<AdmSideNavRoute></AdmSideNavRoute>
<Footer></Footer>
    </div>
  );
}

export default App;
