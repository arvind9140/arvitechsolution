import React from 'react'
import { NavLink } from 'react-router-dom'
import vivek from "./images/vivek.jpg"
const About1 = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid' >
                    <div className='row' >
                        <div className='col-10 mx-auto'   >
                            <div className='row' >
                                {/* <h1>Welcome to About Page</h1> */}
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                                    <h1> {props.name} <strong className='brand-name'>Arvind Kumar Maurya</strong></h1>
                                    <h2 className='my-3'>
                                        I'm full stack developer in creating websites and interfaces and multiple APIs and having  of experience. I'm energetic, self paced and detail oriented
                                        engineer with strong knowledge of HTML / HTML5, CSS / CSS3, JavaScript, Bootstrap, Reactjs NodeJs, Express.js, and MongoDB .
                                    </h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btn}</NavLink>
                                    </div>

                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img' >
                                    <img src={props.imgsrc1} className='img-fluid animated ' alt='image not found' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid' >
                    <div className='row' >
                        <div className='col-10 mx-auto'   >
                            <div className='row' >
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                                    <h1> {props.name} <strong className='brand-name'>Vivek Kumar Yadav</strong></h1>

                                    <h2 className='my-3'>
                                        I'm Backend developer Designed and developed web applications across multiple APIs, third-party integrations and database and having  of experience. I'm energetic, self paced and detail oriented
                                        engineer with strong knowledge of AWS,Linux,APIs, Reactjs, NodeJs, Express.js, and MongoDB .
                                    </h2>

                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btn}</NavLink>
                                    </div>

                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img' >
                                    <img src={props.imgsrc2} className='img-fluid animated ' alt='image not found' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid' >
                    <div className='row' >
                        <div className='col-10 mx-auto'   >
                            <div className='row' >
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                                    <h1> {props.name} <strong className='brand-name'>Saraubh Soni</strong></h1>
                                    <h2 className='my-3'>
                                        I'm frontend developer in creating websites and  user interface(UI) and having  of experience. I'm energetic, self paced and detail oriented
                                        engineer with strong knowledge of HTML / HTML5, CSS / CSS3, JavaScript, Bootstrap etc that allow users to interct with the site or app.
                                    </h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btn}</NavLink>
                                    </div>

                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img' >
                                    <img src={props.imgsrc3} className='img-fluid animated ' alt='image not found' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About1