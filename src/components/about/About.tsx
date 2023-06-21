import React, {useState} from 'react'

const About = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <>
        <div onClick={() => setToggle(!toggle)}>
            <h3>About</h3>
            {toggle && (
                <>
                    <p>A Web Dev enthusiast, always thrive to learn new things and tackle on problems</p>
                    <p>Originally Bio student, decide to change career in tech in late 20s to achieve what I am truly heart in as a web dev</p>
                    <p>Love to join at any open relating positions and growing together</p>
                </>
            )}
        </div>
    </>
  )
}

export default About