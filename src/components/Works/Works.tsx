import React, {useState} from 'react';
import './works.scss'
import { motion, AnimatePresence } from 'framer-motion'

const Works = () => {
    const [toggle, setToggle] = useState(false)

    return (
      <>
          <div onClick={() => setToggle(!toggle)} className='whole1'>
            <AnimatePresence>
              <h3>Works</h3>
              {toggle && (
                <motion.div
                // className={styles.content}
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 1, height: 0 },
                    exit: { opacity: 0, height: 0 },
                }}
                >
                    <div className='header'>
                        <div>
                            <img src="" alt="" />
                            <p>First</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Second</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Third</p>
                        </div>
                    </div>
                  </motion.div>
              )}
              </AnimatePresence>
          </div>
      </>
    )
}

export default Works