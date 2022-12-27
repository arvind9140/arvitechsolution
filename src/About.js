import React from 'react'
import img2 from './images/vivek.jpg'
import img1 from './images/arvind.jpg'
import img3 from './images/saurabh.jpg'



import About1 from './aboutc'
const About = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Welcome to About Page</h1>
            <About1
                imgsrc1={img1}
                imgsrc2={img2}
                imgsrc3={img3}
                // name='Welcome to About Page'
                btn='Contact Now'
                visit='./contact'
            />
        </>
    )
}

export default About