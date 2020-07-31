import './styles.css';
import React, {useState} from 'react';
import NavBar from '../Navbar';
import { PieChart, Pie } from 'recharts'

export default function Home() {

    const data = [91, 35, 53, -53, 24, 50, -20, -80]
 
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    

    return (
        <div className="Home-container">
            <NavBar/>
            <div>

            <PieChart width={730} height={250}>
  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={20} outerRadius={80} label />
</PieChart>
            </div>
        </div>
    );
}