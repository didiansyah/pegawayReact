import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const Employeelist = () => {
    const { employees, removeEmployee, editEmployee } = useContext(GlobalContext);
    return (
        <Fragment>
            {employees.length > 0 ? <Fragment>
                {employees.map(employee => (
                    <div class="grid gap-2 grid-cols-1">
                    <div className="flex text-gray-700 text-center bg-gray-200 px-4 py-2 m-2" key={employee.id}>
                        <div class="flex px-4 py-2 mt-4 mb-4">
                            <img class="shadow sm:w-20 sm:h-20 w-10 h-10 rounded-full" src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-user-flat-character-avatar-png-png-image_4643588.jpg"/>
                        </div>
                        <div className="flex-auto text-left px-4 py-2 m-2">
                            <p className="text-gray-900 leading-none font-semibold mt-1">{employee.name}</p>
                            <p className="text-gray-500 text-xs">{employee.designation}</p>
                            <p className="text-gray-900 text-xs">{employee.phone}</p>
                            <span className="inline-block text-xs">{employee.location}</span>
                        </div>
                        <div className="flex-auto text-right py-2 m-2">
                            <Link to={`/edit/${employee.id}`}>
                                <button onClick={() => editEmployee(employee.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </button>
                            </Link>
                            <button onClick={() => removeEmployee(employee.id)} className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </button>
                        </div>
                    </div>
                    </div>
                ))}
            </Fragment> : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>}
        </Fragment>
    )
}