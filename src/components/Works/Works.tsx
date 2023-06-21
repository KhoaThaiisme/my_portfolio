import React, {useState} from 'react'

const Works = () => {
    const [toggle, setToggle] = useState(false)

    return (
      <>
          <div onClick={() => setToggle(!toggle)}>
              <h3>Works</h3>
              {toggle && (
                  <>
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
                  </>
              )}
          </div>
      </>
    )
}

export default Works