
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Holiday from './Components/Holiday';
import Logout from './Components/Logout';
import Dealer from './Components/Dealer';
import PayIn from './Components/Payin';
import Signup from './Components/Signup';
import SecureRoute from './Components/SecureRoute';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route  element={<SecureRoute/>}>
      <Route path="/admin_access_control" element={<Dashboard/>}/>
      <Route path="/holiday" element={<Holiday/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/dealer_mapping" element={<Dealer/>}/>
      <Route path="/check_Pay_In" element={<PayIn/>}/>
      </Route>
      <Route path="/check_connection_string" element={<Signup/>}/>
      <Route path="/" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
