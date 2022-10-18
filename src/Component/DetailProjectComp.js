import React, { useEffect, useState } from 'react'
import DetailProjectpage from './DetailProjectpage';
import DetailProjectData from './DetailProjectData';
function DetailProjectComp() {
    const [data, setData] = useState({})
    useEffect(() => {
        let seg = window.location.href.split('/');

        const id = seg[seg.length - 1]
        let index = Number(id) - 1
        setData(DetailProjectData[index])
    }, [])


    if (!data) {
        return null
    }
    return (
        <div className='container'>
            <div className="row">
                <DetailProjectpage
                    detailimagesrc={data.detailimagesrc}
                    detailtitle={data.detailtitle}
                    detaildevelopername={data.detaildevelopername}
                    detaildeploymentdate={data.detaildeploymentdate}
                    detailtext={data.detailtext}
                    detailtextlisthead={data.detailtextlisthead}
                    detailtextlist={data.detailtextlist}
                    detailbelowtexthead={data.detailbelowtexthead}
                    detailbelowtextsee={data.detailbelowtextsee}
                    detailbelowtext={data.detailbelowtext}
                    detailforroute={data.detailforroute}
                />

            </div>
        </div>
    )
}

export default DetailProjectComp;