import './Index.css';
import Employee from './Component/Employee';
import { useState } from 'react';
import AddEmployee from './Component/AddEmployee';
import EditEmployee from './Component/EditEmployee';

import {v4 as uuidv4 } from 'uuid';


function App() {

    function updateEmployee(id, newName, newRole) {
        const updatedEmployees = employees.map((employee) => {
            if (id == employee.id) {
                return { ...employee, name: newName, role: newRole };
            }

            return employee;
        });
        setEmployees(updatedEmployees);
    }

    function addEmployee(name,role,img) {
        let newEmp = {
            id:uuidv4(),
            name: name,
            role: role,
            img: img,
        };
        setEmployees([...employees,newEmp]);
    }

    //const showEmployees = false;
    //const [role, SetRole] = useState('dev');
    const [employees, setEmployees] = useState([
      {
        id:1,
        name: 'Caleb',
        role: 'YouTube Sensation',
        img: 'https://cdn4.iconfinder.com/data/icons/sketchy-basic-icons/95/smile-128.png',
    },
    {id:2,
        name: 'Sal',
        role: 'Manager',
        img: 'https://cdn2.iconfinder.com/data/icons/avatars-60/5985/19-Journalist-128.png',
    },
    {id:3,
        name: 'John',
        role: 'Director of Eng.',
        img: 'https://cdn2.iconfinder.com/data/icons/avatars-60/5985/36-Grandfather-128.png',
    }

    ]);
    const listItems = employees.map((emp) => {
      //console.log(emp.id);
      const editEmployee = <EditEmployee 
       key={emp.id} 
        id={emp.id} 
        name={emp.name} 
        role={emp.role} 
        img={emp.img}
        updateEmployee = {updateEmployee}
      />;

        return <Employee 
        key={emp.id} 
        id={emp.id} 
        name={emp.name} 
        role={emp.role} 
        img={emp.img}
        editEmployee = {editEmployee}
        />;
    });

    
    return (
        <div className="App">
            <header className="App-header">
                <span>
                    <h1 className="text-3xl font-bold bg-blue-200">
                        Welocme to react
                        <hr />
                    </h1>
                    {/* {showEmployees ? (
                        <>
                            Enter role:
                            <input
                                type="text"
                                onChange={(e) => {
                                    SetRole(e.target.value);
                                }}
                                className="text-1xl font-bold bg-gray-300"
                            ></input>
                            <br />
                            <Employee name="Omar Abuhadid" role={role} img='https://cdn0.iconfinder.com/data/icons/avatar-2/500/spike-128.png' />
                        </>
                    ) : (
                        <p>no Employees!</p>
                    )} */}
                    <hr />
                    <div className="flex flex-wrap justify-center">
                        {listItems}
                    </div>
                    <br />
                    <div className="flex flex-wrap justify-center">
                        <AddEmployee
                        addEmployee={addEmployee}
                        />
                        </div>
                    
                    
                </span>
            </header>

        </div>
    );
}

export default App;
