import React, {useState} from 'react'
import './inquiry.scss'
import { motion, AnimatePresence } from 'framer-motion'

const Inquiry = () => {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
      <>
          <div onClick={() => setToggle(!toggle)} className='whole2'>
          <AnimatePresence >
              <h3>Inquiry</h3>
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
                      <p>Impress enough?</p>
                      <p>Get in touch with me or simply say hello ?</p>
                      <a href='mailto:khoathai1994@gmail.com'>khoathai1994@gmail.com</a>
                  </motion.div>
              )}
              </AnimatePresence>
          </div>
      </>
    )
}

export default Inquiry