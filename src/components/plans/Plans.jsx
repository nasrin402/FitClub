import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
const Plans = () => {
    return (
        <div className='plans_container'>
        <div className='blur plans-blur-l'> </div>
        <div className='blur plans-blur-r'> </div>
           <div className='plans_heading'>
             <span className='stroke-text'>Ready to Start </span>
             <span>Your Journey </span>
             <span className='stroke-text'>now withus </span>
           </div>
           <div className='plans'>
                {plansData.map((plan, i) =>(
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.title}</span>
                        <span>$ {plan.price}</span>
                        <div className='features'>
                            {plan.features.map((feature, i)=>(<div className='feature' key={i}>
                               <img src={whiteTick} alt=""/>
                            <span>{feature}</span> 
                                </div>))}
                        </div>
                        <div>
                            <span>See more benefits -> </span>
                        </div>
                        <button className="btn" >Join now</button>
                    </div>
                ))}
           </div>
        </div>
    );
}

export default Plans;
