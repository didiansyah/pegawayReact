import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const Editemployee = (route) => {
    let history = useHistory();
    const { employees, editEmployee } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({ id: null, name: '', designation: '', phone: '', location: '' });
    const currentUserId = route.match.params.id;

    useEffect(() => {
        const employeeId = currentUserId;
        const selectedUser = employees.find(emp => emp.id === parseInt(employeeId));
        setSeletedUser(selectedUser);
        // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        editEmployee(selectedUser);
        history.push('/');
    }

    const handleOnChange = (userKey, value) => setSeletedUser({ ...selectedUser, [userKey]: value })

    if (!selectedUser || !selectedUser.id) {
        return <div></div>
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-40 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name of employee
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.name} onChange={(e) => handleOnChange('name', e.target.value)} type="text" placeholder="Masukkan Nama" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.designation} onChange={(e) => handleOnChange('designation', e.target.value)} type="text" placeholder="Masukkan Posisi" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.phone} onChange={(e) => handleOnChange('phone', e.target.value)} type="text" placeholder="Masukkan Nomor Handphone" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.location} onChange={(e) => handleOnChange('location', e.target.value)} type="text" placeholder="Masukkan Lokasi" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-gray-900 w-full hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            Edit Pegawai
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Batal</Link></div>
                </form>
            </div>
        </Fragment>
    )
}