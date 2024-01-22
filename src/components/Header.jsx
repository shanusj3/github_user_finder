import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Header = ({ name, setName, handleSubmit }) => {
    return (
        <div className='w-full bg-slate-100 shadow-md'>
            <div className='container p-6 flex flex-col md:flex-row justify-between items-center mx-auto '>
                <div className='w-full md:max-w-sm'>
                    <h1 className='text-2xl font-semibold hover:text-[#49c353]'>GitHub User Search</h1>
                    <p className='text-md'>Browse users and their profiles <span className='text-[#49c353]'>from here</span></p>
                </div>
                <form onSubmit={handleSubmit} className='w-full md:max-w-sm   pl-3 p-1 rounded-lg bg-[#fff] border-2 border-[#0000003a] flex justify-between items-center'>
                    <input required className='w-full p-2 border-none outline-none bg-transparent flex-1 text-gray-700' type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    <button type='submit'>
                        <IoIosSearch className='text-2xl m-2 cursor-pointer text-[#0000006b]' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Header