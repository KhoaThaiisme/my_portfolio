import React, {useState} from 'react'

const Inquiry = () => {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
      <>
          <div onClick={() => setToggle(true)}>
              <h3>Inquiry</h3>
              {toggle && (
                  <>
                      <p>Impress enough?</p>
                      <p>Get in touch with me or simply say hello ?</p>
                      <a href='mailto:khoathai1994@gmail.com'>khoathai1994@gmail.com</a>
                  </>
              )}
          </div>
      </>
    )
}

export default Inquiry