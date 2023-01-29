import React, { useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Flip from 'react-reveal/Flip'
import { motion } from 'framer-motion'
import Ecectika_Gallery from '../Main_Gallery/Gallery'
import Black_logo from '../../Images/black_logo.png'


import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () => {

  const ref = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <div  id='home' className='home'>
       
      <Navbar />
        <div className="wrapper">
          <Flip bottom>
            <h1 className='Home_title'>ECLECTIKA</h1>
          </Flip>
          <motion.h4 animate={{ opacity: [0, 1] }} transition={{ delay: 2, duration: 1 }} className="subtitle">
            Get lost in the jungle at our wild and exciting event
          </motion.h4>


        </div>
      </div>
   
    </>
  )
}

export default Home