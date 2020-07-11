import React from 'react';
import { Link } from 'react-router-dom';


export const Heading = () => {
    return (
        <div>
            <div className="flex items-center mt-10 mb-10">
                <div className="flex-grow text-left px-4 py-2 m-2">
                    <h5 className="text-gray-900 font-bold text-xl">Daftar Pegawai</h5>
                </div>
                <div className="flex-grow text-right px-4 py-2 m-2">
                    <Link to="/add">
                        <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span className="pl-2">Tambah Pegawai</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
