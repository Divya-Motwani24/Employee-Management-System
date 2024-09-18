import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Logout from './components/Logout'; // Import the Logout component

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} /> {/* Add route for Logout */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
