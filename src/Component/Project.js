import React from 'react'
import PrjectComp from './ProjectComp'
import ProjectData from './ProjectData';
function Project() {
    return (
        <>
            <div className="my-5">
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">

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
                </div>
            </div>
        </>
    )
}

export default Project;