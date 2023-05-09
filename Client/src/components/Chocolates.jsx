import React from 'react';

const Chocolates = () => {
    return (
        <>
            <div class=" rounded-lg overflow-hidden mt-3">
                <table class="w-full table-fixed">
                    <thead>
                        <tr class="table-header-bg">
                            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Image</th>
                            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Country/Factory</th>
                            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Category</th>
                            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr>
                            <td class="py-4 w-full px-6 border-b border-gray-200">
                                <img src="https://i.ibb.co/hdhwgJt/5.png" className='h-[70px]' alt="" />
                            </td>
                            <td class="py-4 w-full px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                            <td class="py-4 w-full px-6 border-b border-gray-200">555-555-5555</td>
                            <td class="py-4 w-full px-6 border-b border-gray-200">555-555-5555</td>
                            <td class="py-4 w-full px-6 border-b border-gray-200">
                                <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                            </td>
                        </tr>
                       
                        
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Chocolates;