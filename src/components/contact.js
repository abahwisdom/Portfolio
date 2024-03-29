import React from "react"

const Contact=()=>{
    return(
        <>
        <div id='contact' className='container ' style={{marginBottom:'40px'}}>
            <div className='contact-title'
            data-sal="fade"
            data-sal-duration="650"
            data-sal-delay="200"
            data-sal-easing="ease"
            > Get In Touch</div>
            
            <div >

            <div class="contact"
            data-sal="fade"
            data-sal-duration="550"
            data-sal-delay="200"
            data-sal-easing="ease"
            ><p>I'm currently open to both freelancing and job opportunities and eager to be part of the execution of interesting ideas. Whether for a potential project or just to say hi, feel free to reach out.</p></div>
             
             <a className='get-in-touch'
             href="mailto:abahwisdom@gmail.com"
             style={{margin:'30px auto'}}
        
            data-sal="fade"
            data-sal-duration="550"
            data-sal-delay="100"
            data-sal-easing="ease"

            >
                Send A Mail
            </a>

            <div className='contact-social'
        >
            {/* <a href='https://twitter.com/_abahwisdom' target="_blank" rel="noopener noreferrer">
                <FaTwitter
                data-sal="fade"
                data-sal-duration="550"
                data-sal-delay="900"
                data-sal-easing="ease"
                
                />
            </a> */}

            {/* <a href='https://linkedin.com/in/abahwisdom' target="_blank" rel="noopener noreferrer">
                <FaLinkedin
                data-sal="fade"
                data-sal-duration="550"
                data-sal-delay="1000"
                data-sal-easing="ease"
                />
            </a>

            <a href='https://github.com/abahwisdom' target="_blank" rel="noopener noreferrer">
              <FaGithub
                data-sal="fade"
                data-sal-duration="550"
                data-sal-delay="1000"
                data-sal-easing="ease"
                />  
            </a> */}
            

            
            {/* <FaMail
            data-sal="fade"
            data-sal-duration="550"
            data-sal-delay="1000"
            data-sal-easing="ease"
            />  */}
        </div>

            {/* <div className='Contact'>
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
                <div>Farebase</div>
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

export default Contact