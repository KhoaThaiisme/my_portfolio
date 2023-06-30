import React, {useEffect, useState} from 'react'
import './about.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '../../constants'
import { read } from 'fs'


const About = () => {
    const [lastYPos, setLastYPos] = useState(0)
    const [shouldShowActions, setShouldShowActions] = useState(false);

    useEffect(() => {

        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;
            const isScrollingDown = yPos > lastYPos;
            const reveals = document.querySelector('.reveal')
            setShouldShowActions(isScrollingUp)
            setLastYPos(yPos)
            if(isScrollingDown) {reveals?.classList.add('active')} else {reveals?.classList.remove('active')}
            
        }
        
        window.addEventListener('scroll', handleScroll, false)

        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [lastYPos])

    // function reveal() {
    //     const reveals = document.querySelectorAll('.reveal');
    //     for (let i = 0; i < reveals.length; i++) {
    //         const windowHeight = window.innerHeight;
    //         const elementTop = reveals[i].getBoundingClientRect().top;
    //         const elementVisible = 150;
    //         if (elementTop < windowHeight - elementVisible) {
    //             reveals[i].classList.add('active')
    //         } else {
    //             reveals[i].classList.remove('active')
    //         }
    //     }
    // }

  return (
    <>
        <div onClick={() => setToggle(!toggle)} className='whole'>
            {/* <AnimatePresence > */}
            <h3>About</h3>
            <div className='about-content'>
                <div className='outer-profile'>
                    <img src={images.profile} alt="profile" className='profile'/>
                    <motion.div className='profile-border reveal' animate={{ opacity: shouldShowActions ? 0 : 1}} initial={{opacity: 0}}></motion.div>
                </div>
                <p>A Web Dev enthusiast, always thrive to learn new things and tackle on problems
                Originally Bio student, decide to change career in tech in late 20s to achieve what I am truly heart in as a web dev
                Love to join at any open relating positions and growing together</p>
            </div>
            {/* {toggle && (
                <motion.div
                // className={styles.content}
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                    exit: { opacity: 0, height: 0 },
                }}
                > */}
                {/* </motion.div>
            )} */}
            {/* </AnimatePresence> */}
        </div>
    </>
  )
}

export default About