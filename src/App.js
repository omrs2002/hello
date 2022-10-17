import './Index.css';
import { createContext, useEffect, useState } from 'react';
import Employees from './Pages/Employees';
import Header from '../src/Component/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Customers from './Pages/Customers';
import Definition from './Pages/Definition';
import NewDictionary from './Pages/NewDictionary';
import Page404 from './Pages/404';
import Customer from './Pages/Customer';
import Recaptcha from './Pages/Recaptcha';
import Login from './Pages/login';

export const LoginContext = createContext();


function App() {
    const [loggedIn,setLoggedIn] = useState(true);

    return (
    <>
        <LoginContext.Provider  value={[loggedIn,setLoggedIn]}>
         <BrowserRouter>
            <Header>
                <Routes>
                   <Route path="/employees" element={<Employees />} />
                   <Route path="/newdictionary" element={<NewDictionary />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/customer/:id" element={<Customer />} />
                    <Route path="/definition/:search" element={<Definition />} />
                    <Route path="/404" element={<Page404 />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/recaptcha" element={<Recaptcha />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                
            </Header>
        </BrowserRouter>
        </LoginContext.Provider>
    </>)
    ;
}

export default App;
