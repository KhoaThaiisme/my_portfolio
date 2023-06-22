import React, {useState} from 'react';
import './works.scss'

const Works = () => {
    const [toggle, setToggle] = useState(false)

    return (
      <>
          <div onClick={() => setToggle(!toggle)}>
              <h3>Works</h3>
              {toggle && (
                  <>
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
                  </>
              )}
          </div>
      </>
    )
}

export default Works