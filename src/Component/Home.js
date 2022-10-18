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
                                        <div className="dev-info">Hi,i`m Debmalya Pramanik <strong className="dev-info-highlight">Creative Designer</strong> based in Hyderabad ,India</div>
                                        <div className="my-10 dev-full-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
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