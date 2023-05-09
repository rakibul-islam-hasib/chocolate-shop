import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DropDown from '../utilities/DropDown';
import Swal from 'sweetalert2';

const Update = () => {
    const [category, setCategory] = useState('')
    const data = useLoaderData();
    const navigate = useNavigate(); 
    // console.log(data) 
    const handelFormSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const country = e.target.country.value;
        const photo = e.target.photo.value;
        const chocolate = { name, country, photo, category }
        fetch(`http://localhost:5000/chocolates/${data._id}` , {
            method : 'PUT', 
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(chocolate)
        })
        .then(res => res.json())
        .then(response => { 
            // console.log(response.modifiedCount)
            if (response.modifiedCount > 0) {
                Swal.fire(
                    'Good job!',
                    'Updated!',
                    'success'
                  )
            }
        })
    }
    const dropdown = (value) => {
        // console.log(value)
        setCategory(value)

    }

    return (
        <div className='w-[70%] mt-3 mx-auto bg-[#1414140d] py-10 px-20'>
            <form onSubmit={handelFormSubmit}>
                <div className="">
                    <label htmlFor="name" className='block ml-2 mb-2 uppercase text-base font-bold'>Name</label>
                    <input defaultValue={data.name} required type="text" name='name' className='w-full py-3 px-7 text-base outline-none rounded-lg' placeholder='Chocolate name' />
                </div>
                <div className="">
                    <label htmlFor="name" className='block ml-2 mb-2 uppercase text-base mt-3 font-bold'>Country/Factory</label>
                    <input defaultValue={data.country} required type="text" name='country' className='w-full py-3 px-7 text-base outline-none rounded-lg' placeholder='Country/Factory name' />
                </div>
                <div className="my-3">
                    <label htmlFor="name" className='block ml-2 mb-2 uppercase text-base font-bold'>Image URL</label>
                    <input defaultValue={data.photo} required type="text" name='photo' className='w-full py-3 px-7 text-base outline-none rounded-lg' placeholder='Image URL' />
                </div>
                <div className="w-full">
                    <label htmlFor="" className='block ml-2 my-2 uppercase text-base font-bold'>Category</label>
                    <DropDown defaultValue={data.category} dropdown={dropdown} />
                </div>
                <div className="flex justify-center my-4">
                    <button className='uppercase bg-[#91572B] w-full py-3 rounded-xl text-white font-bold'>Save</button>
                </div>
            </form>
            <div className="flex justify-center">
                <button onClick={()=>navigate('/')} className='px-4 bg-black text-white py-2 rounded font-bold'>Home</button>
            </div>
        </div>
    );
};

export default Update;