import React from 'react'
import PrjectComp from './ProjectComp'
import ProjectData from './ProjectData';
function Project() {
    return (
        <div className="container pb-5">
            <div className='row'>
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

export default Project;