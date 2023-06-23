import React, {useState} from 'react'
import './about.scss'
import { motion, AnimatePresence } from 'framer-motion'


const About = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <>
        <div onClick={() => setToggle(!toggle)} className='whole'>
            <AnimatePresence >
            <h3>About</h3>
            {toggle && (
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
                >
                    <p>A Web Dev enthusiast, always thrive to learn new things and tackle on problems</p>
                    <p>Originally Bio student, decide to change career in tech in late 20s to achieve what I am truly heart in as a web dev</p>
                    <p>Love to join at any open relating positions and growing together</p>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    </>
  )
}

export default About