import React from 'react'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow.png';
import './MyWork.css';
const MyWork=()=>{
    return(
        <div id='work' className='mywork'>
            <div className='mywork-title'>
                <h1>My latest Work</h1>

            </div>
            <div className='mywork-container'>
               {mywork_data.map((work , index)=>{
            return <img key={index} src={work.w_img} alt=""/>
               }
            )}
            </div>
            <div className='mywork-showmore'>
                <p>Show More</p>
                <img src={arrow} width="20px" height="20px"  alt=""/>
            </div>

        </div>
    )
}
export default MyWork