import React from "react"
import { FaHtml5 } from "react-icons/fa"

const Technologies=()=>{
    return(
        <>
        <div id='skills' className='container ' style={{marginTop:'120px', marginBottom:'100px'}}>
            <div className='tech-title' 
            data-sal="slide-up"
            data-sal-duration="650"
            data-sal-delay="200"
            data-sal-easing="ease"
            > My Skills</div>
            <div >

            <div class="technologies"
            data-sal="slide-up"
            data-sal-duration="550"
            data-sal-delay="200"
            data-sal-easing="ease"
            ><div class="header"></div><p>I am proficient and able to work with an assortment of technologies, including <span>HTML5,</span> <span>CSS3, Sass,</span> <span>JavaScript(ES6), React, Redux, Next JS</span> and <span>Gatsby JS</span>.</p><p>I also have experience working with the <span>MERN stack (MongoDB, Express, React, NodeJs), Firebase</span> (authentication, database and storage) and relational databases such as <span>Postgresql</span>.</p></div>
             
            {/* <div className='technologies'>
                <div>HTML5</div>
                <div>CSS3</div>
                <div>Sass</div>
                <div>Javascript(ES6)</div>
                <div>React</div>
                <div>Redux</div>
                <div>NextJs</div>
                <div>Gatsby</div>
                <div>GraphQl</div>
                <div>MongoDB</div>
                <div>Firebase</div>
                <div>SQL</div>
                <div>Node</div>
                <div>Express</div>
                <div>Github</div> 
            </div>
            <div className='tech-icons' style={{width:'500px', height:'500px', background:'red'}}>a</div> */}
               
            </div>
            
            
        </div>
        
        </>
    )
}

export default Technologies