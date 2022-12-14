import React, { useState } from 'react'
import PrjectComp from './ProjectComp'
import ProjectData from './ProjectData';
import './Project.css'


function Project() {
    const [itemno, setItemno] = useState(1);
    const project = () => {
        setItemno(1);
    }

    const research = () => {
        setItemno(2);
    }

    console.log(itemno);

    if (itemno == 1) {
        return (
            <div className="container pb-5">
                <div className='row'>
                    <div className='navigationbtn'>
                        <button onClick={project} activeClassName="navbtn">Project</button>
                        <button onClick={research} activeClassName="navbtn">Research</button>
                    </div>
                    {
                        ProjectData.map((val, ind) => {
                            return <PrjectComp
                                imagesrc={val.imagesrc}
                                title={val.title}
                                text={val.text}
                                developerimg={val.developerimg}
                                developername={val.developername}
                                deploymentdate={val.deploymentdate}
                                id={val.id}
                            />
                        })
                    }

                </div>

            </div>
        )
    }
    else if (itemno == 2) {
        return (
            <div className="container pb-5">
                <div className='row'>
                    <div className='navigationbtn'>
                        <button onClick={project}>Project</button>
                        <button onClick={research}>Research</button>
                    </div>
                    <div>
                        Research
                    </div>

                </div>

            </div>
        )
    }
}

export default Project;