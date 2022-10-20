import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ProjectComp.css'
import { AiFillLike } from 'react-icons/ai'

function ProjectComp(props) {
    const [likeCount, setLikeCount] = useState(0)
    return (
        <>
    
        <div className="col-md-4 p-3 col-11 mx-auto pb-0">
            <Card bsPrefix style={{ background: "black" }}>

                <NavLink exact to={`/DetailProjectComp/${props.id}`} bsPrefix className="navlink">
                    <Card.Img variant="top" src={props.imagesrc} className="img" bsPrefix />
                </NavLink>

                <Card.Body>
                    <NavLink exact to={`/DetailProjectComp/${props.id}`} className="navlink">
                        <Card.Title className="title" style={{ width: "108%" }}>{props.title}</Card.Title>
                        <Card.Text className="text">{props.text}</Card.Text>
                    </NavLink>
                    <div className='d-flex justify-content-between pt-4'>
                        <div className='developerinfo'>
                            <Card.Img variant="top" src={props.developerimg} className="developerimg" bsPrefix />
                            <div>
                                <Card.Text className="developername">{props.developername}</Card.Text>
                                <Card.Text className="deploymentdate">{props.deploymentdate}</Card.Text>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <button className='likeBtn' onClick={() => { setLikeCount(p => p + 1) }}>
                                <AiFillLike />
                            </button>
                            {
                                likeCount > 0 && (
                                    <div>
                                        <small> {likeCount}</small>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default ProjectComp;