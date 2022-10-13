import React from 'react'
import DetailProjectpage from './DetailProjectpage';
import DetailProjectData from './DetailProjectData';
// import { useParams  } from 'react-router';
// import {getR} from 'react-router-dom'
function DetailProjectComp() {
//  const {id} =useParams();
let id=window.location.href.split('/')[4];
 console.log(id);
    return (
        <>

            <div className="my-5">
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row gy-5">
                            {
                                DetailProjectData.map((val, ind) => {
                                    if(ind==(id-1))
                                    {
                                    return <DetailProjectpage
                                    detailimagesrc={val.detailimagesrc}
                                    detailtitle={val.detailtitle}
                                    detaildevelopername={val.detaildevelopername}
                                    detaildeploymentdate={val.detaildeploymentdate}
                                    detailtext={val.detailtext}
                                    detailtextlisthead={val.detailtextlisthead}
                                    detailtextlist={val.detailtextlist}
                                    detailbelowtexthead={val.detailbelowtexthead}
                                    detailbelowtextsee={val.detailbelowtextsee}
                                    detailbelowtext={val.detailbelowtext}
                                    detailforroute={val.detailforroute}
                                    />
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProjectComp;