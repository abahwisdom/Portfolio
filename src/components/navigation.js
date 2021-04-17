import React, { useState } from 'react'
import { FaTimes, FaHamburger } from 'react-icons/fa';

const Navigation=({display})=>{

    const [openState, setOpenState]= useState('closed');
    const [visibility, setVisibility] = useState('show');
    function changeMenu(){
        if (openState==='open'){
            setOpenState('closed');
            setVisibility('visible')
        }else{
            setOpenState('open');
            setVisibility('hidden')
        }
    }


    return(
        <>
        <div 
         style={{
            position:'absolute',
            right:'50px',
            top: '35px',
            display:display
        }}>
           <ol className='list-nav' style={{visibility:visibility}} >
                <li data-sal="slide-down"
                    data-sal-duration="550"
                    data-sal-delay="200"
                    data-sal-easing="ease"  > <a href='#about'> <span>i.</span> About</a></li>
                <li data-sal="slide-down"
                    data-sal-duration="550"
                    data-sal-delay="400"
                    data-sal-easing="ease"  > <a href='#skills'> <span>ii.</span> Tech</a></li>
                <li data-sal="slide-down"
                    data-sal-duration="550"
                    data-sal-delay="600"
                    data-sal-easing="ease"  > <a href='#work'> <span>iii.</span> Work</a></li>
                <li data-sal="slide-down"
                    data-sal-duration="550"
                    data-sal-delay="800"
                    data-sal-easing="ease"  ><a href='#contact'><span>iv.</span> Contact</a>  </li>
            </ol> 
            <div>
            <nav className={`top-right ${openState}`}
            >
                <a className="disc l1" href='#contact' onClick={changeMenu} >
                    <div>Contact</div>
                </a>
                <a className="disc l2" href='#work' onClick={changeMenu} >
                    <div>Work</div>
                </a>
                <a className="disc l3" href='#skills' onClick={changeMenu} >
                    <div>Tech</div>
                </a>
                <a className="disc l4" href='#about' onClick={changeMenu} >
                    <div>About</div>
                </a>
                <a className="disc l5 toggle" onClick={changeMenu} style={{color:'#021426'}} >
                    {
                        openState==='open' ? <FaTimes/> : <FaHamburger/>
                    }
                </a>
            </nav>
            </div>
        </div>
        
        </>
    )
}

export default Navigation