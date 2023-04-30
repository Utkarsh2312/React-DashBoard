
import * as React from 'react';
import { Link } from "react-router-dom";
import { FaApple, FaGoogle } from 'react-icons/fa';
const Form=()=>{

    return (
        <div className=''>
            <h1 className='text-4xl  font-bold py-2'>Sign In</h1>
            <p className='font-medium text-lg '>Sign in to your account</p>
            <div>
                <div className='text-gray-400 flex items-center justify-between mt-3'>
                    <div className='flex w-1/2 bg-white mr-2 rounded-2xl pt-3 mt-4 py-2'>
                        <div className='py-2 px-2'><FaGoogle color='black'></FaGoogle></div>
                    <button className=''>Sign in with Google</button>
                    </div>
                    
                    <div className='flex w-1/2 bg-white mr-2 rounded-2xl pt-3 mt-4 py-2'>
                        <div className='py-2 px-2'><FaApple color='black' ></FaApple></div>
                    <button className=''>Sign in with Apple</button>
                    </div>
                </div>

            </div>
            <div className='bg-white px-10 py-10 rounded-3xl mt-4'>
                <div className='mb-4'>
                    <label className='text-lg font-medium'>Email Address</label>
                    <input type="email" className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-gray-100' placeholder='johndoe@gmail.com'></input>
                </div>
                <div className='mb-3'>
                    <label className='text-lg font-medium'>Password</label>
                    <input className='w-full  border-gray-100 rounded-xl p-2 mt-1 bg-gray-100' placeholder='••••••••' type='password'></input>
                </div>
                <div>
                   <button className='font-medium text-base text-sky-500 hover:underline'>Forgot Password?</button> 
                </div>
                 <div className='mt-8'>
                    <Link to="/Slides"><button type='submit' className='bg-black w-full text-white rounded-2xl p-3 font-bold text-xl focus:ring-4 focus:ring-grey-100'>Sign In</button></Link>
                </div>
                
            </div>
            <div className='mt-8 flex justify-center'>
                <div className='text-gray-400'>Don't have an account?</div>
                <button className='text-sky-500 hover:underline'>Register here</button>
            </div>
        </div>
    )
}

export default Form;