import React from "react"
import {FiTwitter, FiLinkedin, FiGithub, FiMail} from 'react-icons/fi'


const Intro=()=>{
    return(
        <>
        <div id='about' style={{
            height: '100vh',
        }}
        className='intro-container'>
        <div className='name-is'
        data-sal="slide-up"
        data-sal-duration="550"
        data-sal-delay="500"
        data-sal-easing="ease" >Hi, My name is</div>
        <div 
        data-sal="slide-up"
        data-sal-duration="550"
        data-sal-delay="600"
        data-sal-easing="ease"
        
        style={{fontSize:'clamp(40px, 8vw, 80px)', marginBottom:'10px'}} >Abah Wisdom</div>
        <div className='build-things' 
       data-sal="slide-up"
       data-sal-duration="550"
       data-sal-delay="700"
       data-sal-easing="ease" >
            I build things for the web.
        </div>
        <p className='summary'
         data-sal="slide-up"
         data-sal-duration="550"
         data-sal-delay="800"
         data-sal-easing="ease"

        >
        I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
        </p>
        <a className='get-in-touch'
        href="mailto:abahwisdom@gmail.com"
        data-sal="fade"
        data-sal-duration="550"
        data-sal-delay="900"
        data-sal-easing="ease"

        >
            Contact Me
        </a>
        {/* <div className='intro-social'
        >
            <FiTwitter
            data-sal="fade"
            data-sal-duration="550"
            data-sal-delay="900"
            data-sal-easing="ease"
            
            />
            <FiLinkedin
            data-sal="fade"
            data-sal-duration="550"
            data-sal-delay="1000"
            data-sal-easing="ease"
            />
            <FiGithub
            data-sal="fade"
            data-sal-duration="550"
            data-sal-delay="1000"
            data-sal-easing="ease"
            />
            <FiMail
            data-sal="fade"
            data-sal-duration="550"
            data-sal-delay="1000"
            data-sal-easing="ease"
            /> 
        </div> */}
        </div>
        
        
        </>
    )
}

export default Intro