import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ProjectComp.css'
function ProjectComp(props) {
    return (
        <>
            <div className="col-md-4 col-12 mx-auto">
                {/* <NavLink exact to={'/DetailProjectComp/'+ props.forroute} className="navlink"> */}
                <NavLink exact to={`/DetailProjectComp/${props.id}`} className="navlink"> 
                    <Card style={{ width: '18rem', background: 'black', alignItems: 'left' }}>
                        <Card.Img variant="top" src={props.imagesrc} className="img" bsPrefix/>
                        <Card.Body>
                            <Card.Title className="col-md-12 title">{props.title}</Card.Title>
                            <Card.Text className="text">{props.text}</Card.Text>
                            <div className="developerinfo">
                                <Card.Img variant="top" src={props.developerimg} className="developerimg" bsPrefix/>
                                <div>
                                    <Card.Text className="developername">{props.developername}</Card.Text>
                                    <Card.Text className="deploymentdate">{props.deploymentdate}</Card.Text>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </NavLink>
            </div>
        </>
    )
}

export default ProjectComp;