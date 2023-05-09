import React from 'react';
import { FiEdit } from 'react-icons/fi'
import { MdDeleteSweep } from 'react-icons/md'
import { useLoaderData } from 'react-router-dom';

const Chocolates = () => {
    const allChocolate = useLoaderData(); 
    return (
        <>
            <div className=" rounded-lg overflow-hidden mt-3">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="table-header-bg">
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Image</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Country/Factory</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Category</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="py-4 w-full px-6 border-b border-gray-200">
                                <img src="https://i.ibb.co/hdhwgJt/5.png" className='h-[70px]' alt="" />
                            </td>
                            <td className="py-4 w-full px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                            <td className="py-4 w-full px-6 border-b border-gray-200">555-555-5555</td>
                            <td className="py-4 w-full px-6 border-b border-gray-200">555-555-5555</td>
                            <td className="py-4 w-full px-6 border-b border-gray-200">
                                {/* <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span> */}
                                <div className="flex items-center gap-2">
                                    <span className='text-2xl p-2 rounded-lg bg-orange-200'><FiEdit /> </span>
                                    <span className='text-2xl p-2 rounded-lg  bg-orange-200'><MdDeleteSweep /> </span>
                                </div>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Chocolates;