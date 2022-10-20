import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css';
import Footer from './Footer';
import { IoLogoPython } from 'react-icons/io'
import Test from './Test';


function Home() {
    return (
        <div >
            <scetion id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <div className="p-absolute ml-0">
                                        <div className="dev-info">Hi,i`m <strong className="dev-info-highlight">Debmalya Pramanik</strong> <img src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"  className='animated'/></div>
                                        <div className="my-10 dev-full-info">6+ Years of Professional Experience in dealing with data, with expertise on data modeling, analytics, machine learning, deep learning.</div>
                                        <div className="mt-3">
                                            <NavLink exact to='/Contact' className="btn-contact-us">ContactUs</NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <div className='technology mb-4'>Technology</div>
                                <div className='d-flex justify-content-around mt-4'>
                                    <div className='justify-content-center align-iten-center d-md-flex'>
                                        <IoLogoPython className='python-icon' />
                                        <p>Python</p>
                                    </div>
                                    <div className='justify-content-center align-iten-center d-md-flex'>
                                        <IoLogoPython className='python-icon' />
                                        <p>Python</p>
                                    </div>
                                    <div className='justify-content-center align-iten-center d-md-flex'>
                                        <IoLogoPython className='python-icon' />
                                        <p>Python</p>
                                    </div>
                                    <div className='justify-content-center align-iten-center d-md-flex'>
                                        <IoLogoPython className='python-icon' />
                                        <p>Python</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </scetion>
        </div>
    )
}

export default Home;