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
            ><div class="header"></div><p>Determined and productive web developer with a passion for creative solutions.</p><p>Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including <span>HTML5</span>, <span>CSS3 (Sass and Less)</span>, <span>JavaScript(ES6), MySQL, React, Redux</span> and <span>React Native</span></p><p>I also have full-stack experience in the <span>MERN stack (MongoDB, Express, React, NodeJs)</span>.</p><p>Other relevant technologies include Data Visualizations with D3, Unit and functional testings with Mocha and Jest, jQuery, relational databases as mySQL.</p></div>
             
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