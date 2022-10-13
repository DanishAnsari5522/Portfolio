import React from 'react'
import './DetailProjectpage.css'


function DetailProjectpage(props) {
    return (
        <div className='detail'>
            <scetion id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-4 pt-5 pt-lg-0 order-1 order-lg-1  ">
                                    <div className="p-absolute ml-0">
                                        <img src={props.detailimagesrc} className="detail-dev-img" />
                                    </div>
                                </div>
                                <div className="col-lg-8 order-2 order-lg-2 d-flex justify-content-center flex-column">
                                    <div>
                                        <div className="project-title">{props.detailtitle}</div>
                                        <div className="project-publish-date">{props.detaildeploymentdate}</div>
                                        <div className="project-publish-by">{props.detaildevelopername}</div>
                                        <div className="project-detail">{props.detailtext}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </scetion>
            <section className='cardscomp'>
                <div className="row pt-5">
                    <div className="col-10 mx-auto pt-2">
                        <div className="row">
                            <div className="col-lg-3 order-1 order-lg-1 mt-3 cards">
                                <div>{props.detailtextlisthead}</div>
                                <div className="project-detail">{props.detailtextlist}</div>
                            </div>
                            <div className="col-lg-3 order-2 order-lg-2 mt-3">
                                <div>{props.detailtextlisthead}</div>
                                <div className="project-detail">{props.detailtextlist}</div>
                            </div>
                            <div className="col-lg-3 order-3 order-lg-3 mt-3">
                                <div>{props.detailtextlisthead}</div>
                                <div className="project-detail">{props.detailtextlist}</div>
                            </div>
                            <div className="col-lg-3 order-4 order-lg-4 mt-3">
                                <div>{props.detailtextlisthead}</div>
                                <div className="project-detail">{props.detailtextlist}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="col-10 mx-auto mt-5">
                <div className="project-title">{props.detailbelowtexthead}</div>
                <div className="project-publish-by">{props.detailbelowtextsee}</div>
                <div className="project-detail col-lg-7">{props.detailbelowtext}</div>
            </section>
        </div>

    )
}

export default DetailProjectpage;