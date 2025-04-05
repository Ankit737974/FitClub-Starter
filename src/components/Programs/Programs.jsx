import React from 'react'
import "./Program.css"
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className="Programs" id='Programs'>
        {/* header */}
        <div className="Programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs to</span>
            <span className='stroke-text'>shape you</span>
        </div>

        <div className="program-catagories">
            {programsData.map((program)=>
            (
               <div className="catagory">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
               </div> 
            ))}
        </div>
    </div>
  )
}

export default Programs
