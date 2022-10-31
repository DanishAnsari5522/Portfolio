import React from 'react'
import { IoLogoPython } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import './Home1.css'
import Typing from './Typing'
import slytherin_crest from '../Image/slytherin_crest.png'
function Home1() {
    return (
        <div className='ds4 col-12 mx-auto d'>
            <scetion id="header" className="d-flex align-items-center d1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row">
                                <div className="col-md-9 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                                    <div className="p-absolute ml-0">
                                        <div className="my-10 dev-full-info"><p className='p1'><span className='i'>I</span> missed my <span className='Hogwarts'>Hogwarts</span> letter, as he who must not be named destroyed muggle born records...</p></div>
                                        <div className="my-10 dev-full-info "><p className='p2'><span class="big-font-5 pacifico-font">W</span>ell, since then I've been working to create
                                            magic with <b>data</b> </p></div>

                                    </div>
                                </div>
                                <div className="col-lg-2 order-2 order-lg-2 header-image">
                                    <img src={slytherin_crest} className="mainpageimg" />
                                </div>

                            </div>
                            <div className="col-md-12 mt-4 mx-auto">
                                <div className='technology mb-4'><p className='p3'>Hi, I'm <span className="big-font-3 harry-font p6">Debmalya Pramanik</span></p></div>
                                <div className='technology mb-1'><p className='p4'>For the world, I'm a</p></div>
                                <div><p className='p5'><Typing /></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </scetion>
        </div>
    )
}

export default Home1;
