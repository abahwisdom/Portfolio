import React from "react"
import pdf from '../assets/resume.pdf'
// import { FaHtml5 } from "react-icons/fa"

const Technologies=()=>{
    return(
        <>
        <div id='skills' className='container ' style={{marginTop:'40px', marginBottom:'60px', paddingTop:'40px'}}>
            <div className='tech-title' 
            data-sal="slide-up"
            data-sal-duration="650"
            data-sal-delay="200"
            data-sal-easing="ease"
            > Technologies I work with</div>
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
            <a href={pdf} aria-label="Resume" target="_blank" rel="noopener noreferrer" className='get-in-touch' 
            data-sal="slide-up"
            data-sal-duration="550"
            data-sal-delay="200"
            data-sal-easing="ease" >
                View Resume
            </a>
            
            
        </div>
        
        </>
    )
}

export default Technologies