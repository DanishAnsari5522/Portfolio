import React from 'react'
import './DetailProjectpage.css'


function DetailProjectpage(props) {
    return (
        <div className='p-4 main'>
            <div className="d-md-flex d-block">
                <img src={props.detailimagesrc} className="detail-dev-img" />
                <div>
                    <div className="project-title">{props.detailtitle}</div>
                    <div className="project-publish-date">{props.detaildeploymentdate}</div>
                    <div className="project-publish-by">{props.detaildevelopername}</div>
                    <div className="project-detail">{props.detailtext}</div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-lg-3 order-1 order-lg-1 mt-3 cards cardcomp">
                        <div className='name'>{props.detailtextlisthead}</div>
                        <div className="project-detail">{props.detailtextlist}</div>
                    </div>
                    <div className="col-lg-3 order-1 order-lg-1 mt-3 cards cardcomp">
                        <div className='name'>{props.detailtextlisthead}</div>
                        <div className="project-detail">{props.detailtextlist}</div>
                    </div>
                    <div className="col-lg-3 order-1 order-lg-1 mt-3 cards cardcomp">
                        <div className='name'>{props.detailtextlisthead}</div>
                        <div className="project-detail">{props.detailtextlist}</div>
                    </div>
                    <div className="col-lg-3 order-1 order-lg-1 mt-3 cards cardcomp">
                        <div className='name'>{props.detailtextlisthead}</div>
                        <div className="project-detail">{props.detailtextlist}</div>
                    </div>
                </div>
            </div>
            <section className="col mx-auto mt-5">
                <div className="project-title">{props.detailbelowtexthead}</div>
                <div className="project-publish-by">{props.detailbelowtextsee}</div>
                <div className="project-detail col">{props.detailbelowtext}</div>
            </section>
        </div>
        // <div className='detail'>
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="col-lg-4 pt-5 order-1 order-lg-1  mx-auto">
        //                 <div className="p-absolute ml-0">
        //                     <img src={props.detailimagesrc} className="detail-dev-img" />
        //                 </div>
        //             </div>
        //             <div className="col-lg-8 order-2 order-lg-2 d-flex justify-content-center flex-column">
        //                 <div>
        //                     <div className="project-title">{props.detailtitle}</div>
        //                     <div className="project-publish-date">{props.detaildeploymentdate}</div>
        //                     <div className="project-publish-by">{props.detaildevelopername}</div>
        //                     <div className="project-detail">{props.detailtext}</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <section className='cardscomp'>
        //         <div className="row pt-5">
        //             <div className="col mx-auto p-2">
        //                 <div className="row">
        //                     <div className="col-lg-3 order-1 order-lg-1 mt-3 cards cardcomp">
        //                         <div className='name'>{props.detailtextlisthead}</div>
        //                         <div className="project-detail">{props.detailtextlist}</div>
        //                     </div>
        //                     <div className="col-lg-3 order-2 order-lg-2 mt-3 cardcomp">
        //                         <div className='name'>{props.detailtextlisthead}</div>
        //                         <div className="project-detail">{props.detailtextlist}</div>
        //                     </div>
        //                     <div className="col-lg-3 order-3 order-lg-3 mt-3 cardcomp">
        //                         <div className='name'>{props.detailtextlisthead}</div>
        //                         <div className="project-detail">{props.detailtextlist}</div>
        //                     </div>
        //                     <div className="col-lg-3 order-4 order-lg-4 mt-3 cardcomp">
        //                         <div className='name'>{props.detailtextlisthead}</div>
        //                         <div className="project-detail">{props.detailtextlist}</div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        //     <section className="col mx-auto mt-5">
        //         <div className="project-title">{props.detailbelowtexthead}</div>
        //         <div className="project-publish-by">{props.detailbelowtextsee}</div>
        //         <div className="project-detail col">{props.detailbelowtext}</div>
        //     </section>
        // </div>

    )
}

export default DetailProjectpage;