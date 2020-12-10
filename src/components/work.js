import React from "react"
import soulmates_image from "../assets/work/Soulmates 1.jpg"
import blacklife_image from "../assets/work/blacklife1.jpg"
import collabo_image from "../assets/work/collabo2.jpg"
import newwws_image from "../assets/work/newwws1.jpg"
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'

const Work=()=>{

    const workList=[
        {
            title:'Soulmate(s)',
            image: soulmates_image,
            description:`A client-side rendered dating site. Create Account, sign in, create profile and explore other users's profiles. Also equipped with chat functionality for users that have liked each other's profiles. `,
            external:'https://soulmates.netlify.app',
            github:'https://github.com/abahwisdom/soulmates',
            tech:['React', 'Firebase']
        },
        {
            title:'Blacklife',
            image: blacklife_image,
            description:`A fullstack e-commerce web app equipped. Browse through black fashion collections and place an order. Also equiped with admin route behind authentication protection for adding and editing of products and collections. `,
            external:'https://blacklife.herokuapp.com',
            github:'https://github.com/abahwisdom/blacklife',
            tech:['React', 'Node JS', 'Express JS', 'Postgresql']
        },
        {
            title:'Collabo',
            image: collabo_image,
            description:`A MERN stack web app for tracking progress on collaborative and personal projects. Create projects, create tasks, add members and assign tasks to members.  `,
            external:'https://collabo-mern.herokuapp.com',
            github:'https://github.com/abahwisdom/collabo',
            tech:['React', 'Node JS', 'Express JS', 'MongoDB']
        },
        {
            title:'neWWWs',
            image: newwws_image,
            description:`A server-side rendered news aggregating site. Find top news from all over the world. You can also search for news by subject or keyword `,
            external:'https://newwws-app.herokuapp.com',
            github:'https://github.com/abahwisdom/newwws',
            tech:['React', 'Next JS', 'REST API']
        }
    ]

    return(
        <>
        <div id='work' className='container 'style={{marginTop:'60px', marginBottom:'60px', paddingTop:'40px'}}>
            <div className='tech-title' 
            data-sal="slide-up"
            data-sal-duration="550"
            data-sal-delay="100"
            data-sal-easing="ease"
            > Some things I've built</div>
            <div >

            <div class="work"
            // data-sal="slide-up"
            // data-sal-duration="550"
            // data-sal-delay="100"
            // data-sal-easing="ease"
            >
                {
                    workList.map(project=>{
                        const { external, title, tech, github, description, image } = project;
                        return(
                            <>
                            <div className='project-contain'
                            data-sal="slide-up"
                            data-sal-duration="550"
                            data-sal-delay="100"
                            data-sal-easing="ease" >
                            <div className="project-content">
                                {/* <p className="project-overline">Featured Project</p> */}
                                <h3 className="project-title">{title}</h3>
                                <div className="project-description">{description} </div>

                                {tech.length && (
                                    <ul className="project-tech-list">
                                    {tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                    </ul>
                                )}

                                <div className="project-links">
                                    {github && (
                                    <a href={github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer" >
                                        <FaGithub size='20px'  />
                                    </a>
                                    )}
                                    {external && (
                                    <a href={external} aria-label="External Link" target="_blank" rel="noopener noreferrer" >
                                        <FaExternalLinkAlt size='20px'  />
                                    </a>
                                    )}
                                </div>
                                </div>

                                <div className="project-image">
                                <a href={external ? external : github ? github : '#'}>
                                    <img alt='' src={image} className="img" target="_blank" rel="noopener noreferrer" />
                                </a>
                                </div>
                            </div>
                           
                            </>

            
                        )
                    })
                }

            </div>
               
            </div>
            
            
        </div>
        
        </>
    )
}

export default Work