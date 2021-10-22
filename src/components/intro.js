import React from "react"


const Intro=()=>{
    return(
        <>
        <div id='about' style={{
            height: '100vh',
        }}
        className='intro-container'>
        <div className='name-is'
        data-sal="fade"
        data-sal-duration="950"
        data-sal-delay="500"
        data-sal-easing="ease" >Hello. I am...</div>
        <div 
        data-sal="fade"
        data-sal-duration="950"
        data-sal-delay="600"
        data-sal-easing="ease"
        
        style={{fontSize:'clamp(38px, 8vw, 80px)'}} >Abah Wisdom</div>
        <div className='build-things' 
       data-sal="fade"
       data-sal-duration="950"
       data-sal-delay="700"
       data-sal-easing="ease" >
            Software developer
        </div>
        <p className='summary'
         data-sal="fade"
         data-sal-duration="950"
         data-sal-delay="800"
         data-sal-easing="ease"

        >
        I'm a software developer based in Nigeria currently specializing in building modern efficient websites with performant experience. I place value on speed, function and aesthetics and aim to provide distinctive experiences all-round. 
        </p>
        <a className='get-in-touch'
        href="mailto:abahwisdom@gmail.com"
        data-sal="fade"
        data-sal-duration="900"
        data-sal-delay="900"
        data-sal-easing="ease"

        >
            Contact Me
        </a>
        {/* <div className='intro-social'
        >
            <FiTwitter
            data-sal="fade"
            data-sal-duration="950"
            data-sal-delay="900"
            data-sal-easing="ease"
            
            />
            <FiLinkedin
            data-sal="fade"
            data-sal-duration="950"
            data-sal-delay="1000"
            data-sal-easing="ease"
            />
            <FiGithub
            data-sal="fade"
            data-sal-duration="950"
            data-sal-delay="1000"
            data-sal-easing="ease"
            />
            <FiMail
            data-sal="fade"
            data-sal-duration="950"
            data-sal-delay="1000"
            data-sal-easing="ease"
            /> 
        </div> */}
        </div>
        
        
        </>
    )
}

export default Intro