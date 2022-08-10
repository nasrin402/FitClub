import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';
const Plans = () => {
    return (
        <div className='plans_container'>
           <div className='plans_heading'>
             <span className='stroke-text'>Ready to Start </span>
             <span>Your Journey </span>
             <span className='stroke-text'>now withus </span>
           </div>
           <div className='plans'>
                {plansData.map((plan, i) =>(
                    <div className='s_plan' key={i}>
                        {plan.icon}
                        <span>{plan.title}</span>
                    </div>
                ))}
           </div>
        </div>
    );
}

export default Plans;
