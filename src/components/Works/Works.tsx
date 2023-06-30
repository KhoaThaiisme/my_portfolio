import React, {useState} from 'react';
import './works.scss'
import { motion, AnimatePresence } from 'framer-motion'

const Works = () => {
    const [toggle, setToggle] = useState(false)

    return (
      <>
          <div onClick={() => setToggle(!toggle)} className='whole1'>
            {/* <AnimatePresence> */}
              <h3 className='work-title'>Works</h3>
              
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
              {/* </AnimatePresence> */}
          </div>
      </>
    )
}

export default Works