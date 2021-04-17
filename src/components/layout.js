/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../css/layout.scss"
import Navigation from "./navigation"
import { loadStars } from "../assets/universe"
// import {loader} from "../assets/loader"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {

  useEffect(()=>{
    loadStars();
    setTimeout(()=>setLoading(false), 1000);
  },[])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [stillLoading, setLoading]= useState(true);

  return (
    <>
    
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Navigation display={stillLoading?'none':'block'}/>
      <div className='cheat1'>Abah</div>
      <div className='cheat2'>Wisdom</div>
      <div className='cheat3'>Software</div>
      <div className='cheat4'>Developer</div>
      <div className="loader fade-out" style={{
          // display: stillLoading?'block':'none'
          }}
         
          >
        <div className="inner one"
         data-sal="fade"
         data-sal-duration="550"
         data-sal-delay="100"
         data-sal-easing="ease"></div>
        <div className="inner two"
        data-sal="fade"
        data-sal-duration="550"
        data-sal-delay="250"
        data-sal-easing="ease"></div>
        <div className="inner three"
        data-sal="fade"
        data-sal-duration="550"
        data-sal-delay="400"
        data-sal-easing="ease"></div>
      </div>
      {/* <div
        style={{
          margin: `120px auto 0 auto `,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
      <div style={{
        // padding:'95px 25px 0 25px',
        // padding: '0 20px'
      }} >
        <main style={{
          margin:'auto',
          maxWidth: 1000,
          display: stillLoading?'none':'block'
          }}>{children}
        </main> 
        {/* <div class="planets"
        data-sal="fade"
        data-sal-duration="550"
        data-sal-delay="300"
        data-sal-easing="ease"
        >
        <svg id="moonstars" width="317" height="146" viewBox="0 0 317 146" xmlns="http://www.w3.org/2000/svg" onclick="moonstars.reset().play();">
          <g class="moon" stroke="#141413" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="bevel">
            <g class="stars" fill="transparent">
              <path d="M41.2747 8.7875L39.0385 6.243l.559-3.534c.1398-.5654-.1397-1.1308-.559-1.4135-.4193-.2828-.9783-.424-1.5374-.1414l-3.214 1.697-3.215-1.697c-.419-.282-.978-.141-1.537.142-.419.283-.699.848-.559 1.414l.559 3.534-2.516 2.545c-.419.424-.559.99-.419 1.414.14.566.559.849 1.118.99l3.634.566 1.538 3.251c.28.424.699.848 1.258.848s.979-.282 1.258-.848l1.537-3.251 3.634-.565c.559-.141.979-.424 1.118-.989.14-.565 0-1.131-.419-1.413z" class="star5"/>
              <path d="M14.474 138.1216l-2.046-2.328.5116-3.233c.1278-.5174-.128-1.0348-.5115-1.2934-.383-.2587-.895-.388-1.406-.1293l-2.941 1.551-2.941-1.552c-.383-.259-.895-.13-1.406.129-.383.258-.639.776-.511 1.293l.512 3.233-2.301 2.328c-.383.388-.511.905-.383 1.293.128.517.512.776 1.023.905l3.325.517 1.406 2.975c.256.388.64.776 1.151.776s.895-.259 1.151-.776l1.407-2.975 3.325-.518c.512-.129.895-.388 1.023-.905.128-.518 0-1.035-.383-1.293z" class="star4"/>
              <path d="M315.359 39.5376l-1.674-1.9047.4184-2.646c.1046-.424-.1046-.847-.4185-1.059-.314-.212-.733-.318-1.151-.106l-2.407 1.27-2.407-1.27c-.314-.212-.733-.106-1.151.105-.314.212-.523.635-.419 1.058l.418 2.645-1.883 1.904c-.314.318-.419.741-.314 1.058.104.423.418.635.837.741l2.72.423 1.151 2.433c.209.3172.523.635.941.635s.732-.212.941-.635l1.151-2.434 2.72-.423c.418-.106.732-.3178.837-.741.104-.423 0-.8465-.314-1.058z" class="star3"/>
              <path d="M259.426 119.79l-1.332-1.5157.333-2.1053c.0832-.337-.0833-.6738-.333-.8422-.25-.1684-.583-.2526-.916-.0842l-1.915 1.0106-1.915-1.0106c-.2498-.1684-.583-.0842-.916.0842-.2497.1684-.4163.5053-.333.8422l.333 2.1053-1.4987 1.5158c-.2497.253-.333.59-.2497.843.0832.337.333.506.666.59l2.165.337.9157 1.937c.1666.253.4164.506.7494.506.333 0 .5828-.168.7494-.505l.916-1.937 2.165-.336c.333-.084.583-.252.666-.589.084-.337 0-.673-.249-.842z" class="star2"/>
              <path d="M224.6333 23.506l-2.2362-2.5444.56-3.534c.14-.5654-.14-1.1308-.559-1.4136-.419-.2827-.978-.424-1.537-.1413l-3.214 1.6963-3.214-1.6963c-.419-.2827-.978-.1414-1.537.1413-.419.2828-.699.8482-.559 1.4136l.559 3.534-2.515 2.5445c-.419.424-.559.99-.419 1.414.14.566.559.848 1.118.99l3.634.566 1.537 3.251c.28.424.699.849 1.258.849s.978-.282 1.258-.848l1.538-3.251 3.634-.565c.559-.141.978-.424 1.118-.989.14-.565 0-1.131-.419-1.413z" class="star1"/>
              <path d="M94.8036 93.628l-1.4273-1.624.3568-2.2558c.09-.361-.089-.7218-.356-.9023-.267-.181-.624-.271-.981-.091l-2.051 1.083-2.052-1.083c-.267-.181-.624-.09-.981.09-.267.18-.446.541-.356.902l.357 2.255-1.605 1.624c-.267.271-.357.631-.267.902.09.361.357.541.714.631l2.32.361.981 2.075c.179.271.446.541.803.541.357 0 .625-.181.803-.542l.981-2.075 2.32-.361c.357-.091.624-.271.7138-.632.089-.361 0-.722-.2677-.902z" class="star0"/>
            </g> */}
            {/* <g class="Moon" transform="translate(111 26)">
              <circle class="Oval" cx="47" cy="47" r="47"/>
              <ellipse class="Oval-2" transform="rotate(-41 76 78)" cx="76" cy="78" rx="6" ry="4"/>
              <path d="M49.9988 89.3327C48.8473 87.931 47 87 45 87c-1.4852 0-3 0-5 2" class="Oval-3"/>
              <path d="M24.907 52.182C21.981 53.8013 20 56.9193 20 60.5c0 .8766.1187 1.7255.341 2.5314m3.177 4.849C25.1512 69.206 27.2328 70 29.5 70c5.2467 0 9.5-4.2533 9.5-9.5 0-4.2825-2.8337-7.9032-6.7283-9.0893" class="Oval-4"/>
              <path d="M11.3158 22.7852c-.626 1.7567-.5273 3.4274.4403 4.5404 1.812 2.084 5.984 1.4237 9.318-1.475 3.335-2.8986 4.569-6.938 2.758-9.022-1.233-1.4186-3.56-1.5656-5.972-.6006" class="Oval-8"/>
              <path d="M47.1157 4.932C47.0395 5.2802 47 5.637 47 6c0 3.866 4.4772 7 10 7s10-3.134 10-7c0-.546-.0893-1.0774-.2582-1.5874" class="Oval-9"/>
              <path d="M62.9353 35.6836C60.835 33.418 57.833 32 54.5 32 48.1487 32 43 37.1487 43 43.5S48.1487 55 54.5 55c3.3814 0 6.422-1.4594 8.526-3.7826m2.6142-4.852c.235-.916.3598-1.876.3598-2.8654 0-.3228-.0133-.6424-.0394-.9585" class="Oval-5"/>
              <path d="M77.363 33.435C76.585 32.5774 75.0854 32 74 32c-2 0-4 2.5147-4 5s2.0147 5 4.5 5 4.5-2.0147 4.5-4.5" class="Oval-6"/>
              <path d="M9.725 67.2865c2.1756-.3836 3.6282-2.4582 3.2446-4.6338-.3836-2.1756-2.4582-3.6282-4.6338-3.2446" class="Oval-7"/>
            </g> */}
          {/* </g>
        </svg> */}
      {/* </div> */}
      
      <svg id="svgCanvas" style={{position:'fixed', top:'0', zIndex:'-3'}} viewbox="0 0 2000 1000" preserveaspectratio="xMinYMin slice" width="100%"  >
  <g id="starGroup"></g>

  <g transform="translate(150, 150)">
    <circle class='shooting-star' fill='white' cx="0" cy="0" r="2" radius="125" ></circle>
  </g>
</svg>

      </div>
        

        {/* <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
