import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../utilities/DropDown';

const AddChocolate = () => {
    const [category, setCategory] = useState(''); 
    const handelFormSubmit = e => {
        e.preventDefault()
        const name  =e.target.name.value ; 
        const country = e.target.country.value ;
        const photo = e.target.photo.value ;
        const chocolate = {name , country , photo , category}
        console.log(chocolate)
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
                    <input type="text" name='name' className='w-full py-3 px-7 text-base outline-none rounded-lg' placeholder='Chocolate name' />
                </div>
                <div className="">
                    <label htmlFor="name" className='block ml-2 mb-2 uppercase text-base mt-3 font-bold'>Country/Factory</label>
                    <input type="text" name='country' className='w-full py-3 px-7 text-base outline-none rounded-lg' placeholder='Country/Factory name' />
                </div>
                <div className="my-3">
                    <label htmlFor="name" className='block ml-2 mb-2 uppercase text-base font-bold'>Image URL</label>
                    <input type="text" name='photo' className='w-full py-3 px-7 text-base outline-none rounded-lg' placeholder='Image URL' />
                </div>
                <div className="w-full">
                <label htmlFor="" className='block ml-2 my-2 uppercase text-base font-bold'>Category</label>
                    <DropDown dropdown={dropdown} /> 
                </div>
                <div className="flex justify-center my-4">
                    <button className='uppercase bg-[#91572B] w-full py-3 rounded-xl text-white font-bold'>Save</button>
                </div>
            </form>
        </div>
    );
};

export default AddChocolate;