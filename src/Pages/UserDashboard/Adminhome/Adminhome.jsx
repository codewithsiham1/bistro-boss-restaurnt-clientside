import React from 'react';
import Useauth from '../../../Hooks/Useauth';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const Adminhome = () => {
    const {user}=Useauth();
    const axiosSecure=UseAxiosSecure();
    // tanstackquery

    const {data:stats}=useQuery({
     queryKey:['admin-states'],
     queryFn:async()=>{
     const res=await axiosSecure.get('/admin-states');
     return res.data;
     }
    });
    // chart ar jonno
    const {data:chartdata=[]}=useQuery({
        queryKey:['order-states'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/order-stats');
            return res.data
        }
    });
// custom shapebar for the chart
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
    return (
        <div>
            <h1 className='text-xl font-bold'>
                <span>Hi,Welcome</span>
                {
                    user?.displayName?user.displayName:'Back'
                }
            </h1>
<div className="stats shadow flex flex-col md:flex-row gap-4">
  {/* Revenue */}
  <div className="stat bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl">
    <div className="stat-figure text-white text-4xl">💸</div>
    <div className="stat-title text-white">Revenue</div>
    <div className="stat-value">${stats?.revenue}</div>
    <div className="stat-desc text-white opacity-80">Jan 1st - Feb 1st</div>
  </div>

  {/* Users */}
  <div className="stat bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl">
    <div className="stat-figure text-white text-4xl">👥</div>
    <div className="stat-title text-white">Users</div>
    <div className="stat-value">{stats?.users}</div>
    <div className="stat-desc text-white opacity-80">↗︎ 400 (22%)</div>
  </div>

  {/* Orders */}
  <div className="stat bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-xl">
    <div className="stat-figure text-white text-4xl">🛒</div>
    <div className="stat-title text-white">Orders</div>
    <div className="stat-value">{stats?.orders}</div>
    <div className="stat-desc text-white opacity-80">↘︎ 90 (14%)</div>
  </div>

  {/* Menu Items */}
  <div className="stat bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl">
    <div className="stat-figure text-white text-4xl">🍽️</div>
    <div className="stat-title text-white">Menu Items</div>
    <div className="stat-value">{stats?.menuItems}</div>
    <div className="stat-desc text-white opacity-80">↘︎ 90 (14%)</div>
  </div>
</div>
<div className='flex'>
 <div className='w-1/2'>
 <BarChart
      width={500}
      height={300}
      data={chartdata}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartdata.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
 </div>
 <div className='w-1/2'>

 </div>
</div>

        </div>
    );
};

export default Adminhome;