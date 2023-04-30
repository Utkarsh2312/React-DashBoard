import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Custom Short Pants', value: 250 },
  { name: 'Basic Trees', value: 980 },
  { name: 'Super Hoodies', value: 540 },
];

const COLORS = ['#EE8484', '#98D89E', '#F7DC7D'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function PieComponent() {
  return (
    <div className='flex'>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className='grid grid-rows-3 pt-14 pl-16'>
            {
                COLORS.map((item, index) => (
                    <div className='cursor-pointer h-[10px] w-[10px] rounded-full' style={{backgroundColor: item}} key={index}></div>
                ))
            }
        
        </div>
        <div className=' grid grid-rows-3 py-11 pl-6'>
            {
                data.map(
                    (item, index) => (
                        <p key={index} className=' cursor-pointer font-bold pt-2'>{item.name}</p>
                    )
                )
            }
        </div>
    </div>
  )
} 

export default PieComponent