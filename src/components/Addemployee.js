import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Addemployee = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [designation, setDesignation] = useState('');
    const { addEmployee, employees } = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        const newEmployee = {
            id: employees.length + 1,
            name,
            location,
            designation,
            phone
        }
        addEmployee(newEmployee);
        history.push("/");
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-40 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Nama Pegawai
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-900 focus:shadow-outline" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Masukkan nama" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Lokasi
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-900 focus:shadow-outline" value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Masukkan lokasi" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                            Posisi
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-900  focus:shadow-outline" value={designation} onChange={(e) => setDesignation(e.target.value)} type="text" placeholder="Masukkan posisi" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            Nomor Hp
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-900  focus:shadow-outline" value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Masukkan Nomor Handphone" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-gray-900 w-full hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Tambah Pegawai
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Batal</Link></div>
                </form>
            </div>
        </Fragment>
    )
}