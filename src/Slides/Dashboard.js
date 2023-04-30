import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {  FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { FaPaste } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import PieComponent from './PieComponent';

const data = [
  {
    name: '',
    Guest: 200,
    User: 100,
    
  },
  {
    name: 'Week1',
    Guest: 350,
    User: 450,

  },
  {
    name: 'Week2',
    Guest: 220,
    User: 150,
    
  },
  {
    name: 'Week3',
    Guest: 370,
    User: 490,

  },
  {
    name: 'Week4',
    Guest: 250,
    User: 150
  }
  
];

function Dashboard() {
  return (
      <div className='pt-[10px] px-[50px] '>
        <div className='flex items-center justify-between'>
            <h1 className='text-[28px] font-bold font-sans'>Dashboard</h1>
            <div className='flex items-center justify-between'>
              <div className='flex items-center rounded-[5px]'>
                  <input type='text'  className='bg-[#F8F9FC] h-[30px] outline-none pl-[13px] w-[150px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search'></input>
                  <div className='bg-[#F8F9FC] h-[30px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px] text-gray-300'><FaSearch></FaSearch></div>
              </div>
              <div className='bg-[#F8F9FC] ml-[20px] mr-[20px] h-[30px] px-[10px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                  <FaBell></FaBell>
              </div>
              <div className='bg-[#F8F9FC] h-[40px] px-[10px] flex items-center justify-center cursor-pointer rounded-[100px]'>
                  <FaRegUser fontSize={28}></FaRegUser>
              </div>
            </div>
            
        </div>
        <div className='grid grid-cols-4 gap-[30px] mt-[30px] pb-[15px]'>
            <div className='h-[100px] rounded-[12px] bg-[#DDEFE0] cursor-pointer hover:shadow-lg transform hover:scale-[103%]'>
              <div className='flex items-center justify-center mt-[20px]'>
                <h2 className='font-normal text-[18px] mr-[30px]'>Total Revenue</h2>
                <FaDownload fontSize={28}></FaDownload>
              </div>
              <div className='flex items-center justify-center'>
                <h1 className='text-[25px] font-bold mt-[5px] pr-9'>$2,192,430</h1>
              </div>
            </div>

            <div className='h-[100px] rounded-[12px] bg-[#F4ECDD] cursor-pointer hover:shadow-lg transform hover:scale-[103%]'>
              <div className='flex items-center justify-center mt-[20px]'>
                <h2 className='font-normal text-[18px] mr-[30px]'>Total Transactions</h2>
                <FaPaste fontSize={28}></FaPaste>
              </div>
              <div className='flex items-center justify-center'>
                <h1 className='text-[25px] font-bold mt-[5px] pr-[135px]'>1,520</h1>
              </div>
            </div>

            <div className='h-[100px] rounded-[12px] bg-[#EFDADA] cursor-pointer hover:shadow-lg transform hover:scale-[103%]'>
              <div className='flex items-center justify-center mt-[20px]'>
                <h2 className='font-normal text-[18px] mr-[30px] '>Total Likes</h2>
                <FaThumbsUp fontSize={28}></FaThumbsUp>
              </div>
              <div className='flex items-center justify-center'>
                <h1 className='text-[25px] font-bold mt-[5px] pr-[75px]'>9,721</h1>
              </div>
            </div>

            <div className='h-[100px] rounded-[12px] bg-[#DEE0EF] cursor-pointer hover:shadow-lg transform hover:scale-[103%]'>
              <div className='flex items-center justify-center mt-[20px]'>
                <h2 className='font-normal text-[18px] mr-[30px]'>Total Users</h2>
                <FaUserFriends fontSize={28}></FaUserFriends>
              </div>
                <div className='flex items-center justify-center'>
                <h1 className='text-[25px] font-bold mt-[5px] pr-[100px]'>892</h1>
              </div>
            </div>
           
        </div>
        <div className='bg-white rounded-3xl cursor-pointer shadow-sm mt-[30px]'>
            <div  className='items-center justify-between m-[10px] pl-[20px]'>
              <div className='font-bold pt-6 px-4'>
                 Activities
              </div>
              <div className='text-[#858585] py-2 px-4 text-xs cursor-pointer'>
                May - June 2021
              </div>
              {/* <div className='flex'>
                <div className='flex'>
                    <div>

                    </div>
                    <div>
                      Guest
                    </div>
                </div>
                <div>User</div>
              </div> */}
            </div>
          <div>
            <LineChart
              width={1200}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" activeDot={{ r: 6 }} className='py-2 px-2'/>
              <Line type="monotone" dataKey="User" stroke="#9BDD7C" activeDot={{ r: 6 }} className='py-2 px-2'/>
            </LineChart>
          </div>
        </div>
        <div className='flex w-full gap-[30px] mt-[30px]'>
              <div className='w-[600px] bg-white shadow-sm cursor-pointer rounded-3xl my-4'>
            <div className='flex'>
              <div className='bg-white justify-center items-center pt-5 px-7 pb-2 rounded-3xl'>
              <h2 className=' font-bold mx-1'>Top Product</h2>
            </div>
            <div className='text-[#858585] px-6 text-xs cursor-pointer pt-6 pl-[300px]'>
                May - June 2021
            </div>
            </div>
              
            <div>
              <PieComponent/>
            </div>
        </div> 
        <div className=' basis-[50%] bg-white shadow-sm cursor-pointer rounded-3xl my-4'>
            <div className='flex'>
              <div className='bg-white justify-center items-center pt-5 px-7 pb-2 rounded-3xl'>
              <h2 className=' font-bold mx-1'>Today's Schedule</h2>
            </div>
            <div className='text-[#858585] px-6 text-xs cursor-pointer pt-6 pl-[320px]'>
                See All 
            </div>
            </div>
            <div className='flex'>
              <div className='h-[60px] w-[5px] bg-[#9BDD7C] ml-8 my-4'>
                <p className=' text-[#9BDD7C]'>|</p>
              </div>
              <div className=' mx-3 my-4'>
                <p className='text-[#666666] text-sm'>Meetings with suppliersfrom Kuta Bali</p>
                <p className='text-[#999999] text-xs'>14:00 - 15:00</p>
                <p className='text-[#999999] text-xs'>at Sunset Road, Kuta, Bali</p>
              </div>
            </div>
            <div className='flex'>
              <div className='h-[60px] w-[5px] bg-[#6972C3] ml-8 my-4'>
                <p className=' text-[#6972C3]'>|</p>
              </div>
              <div className='mx-3 my-4'>
                <p className='text-[#666666] text-sm'>Check operation at Giga Factory 1</p>
                <p className='text-[#999999] text-xs'>18:00 - 20:00</p>
                <p className='text-[#999999] text-xs'>at Jakarta</p>
              </div>
            </div>
        </div> 
        </div>
        
    </div>
  );
}

export default Dashboard
