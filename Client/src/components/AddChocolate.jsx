import React, { useState } from 'react';
import DropDown from '../utilities/DropDown';
import Swal from 'sweetalert2'
const AddChocolate = () => {
    const [category, setCategory] = useState(''); 
    const handelFormSubmit = e => {
        e.preventDefault()
        const name  =e.target.name.value ; 
        const country = e.target.country.value ;
        const photo = e.target.photo.value ;
        const chocolate = {name , country , photo , category}
        fetch('http://localhost:5000/chocolates' , {
            method : 'POST' , 
            headers : { 
                'content-type' : 'application/json'
            },
            body : JSON.stringify(chocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'Chocolate added to database!',
                    'success'
                  )
                  e.target.reset(); 
            }
        })
        // console.log(chocolate)
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
                    <input required type="text" name='name' className='w-full py-3 px-7 text-base outline-none rounded-lg' placeholder='Chocolate name' />
                </div>
                <div className="">
                    <label htmlFor="name" className='block ml-2 mb-2 uppercase text-base mt-3 font-bold'>Country/Factory</label>
                    <input required type="text" name='country' className='w-full py-3 px-7 text-base outline-none rounded-lg' placeholder='Country/Factory name' />
                </div>
                <div className="my-3">
                    <label htmlFor="name" className='block ml-2 mb-2 uppercase text-base font-bold'>Image URL</label>
                    <input required type="text" name='photo' className='w-full py-3 px-7 text-base outline-none rounded-lg' placeholder='Image URL' />
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