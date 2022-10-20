import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillHddNetworkFill } from 'react-icons/bs'
import { IoSchoolOutline } from 'react-icons/io5'

export default function Timeline() {
    return (
        <div className='p-3 '>
            <h2 className=' m-3 d-flex justify-content-center'>Education and Work Experience</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2012-2016"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BsFillHddNetworkFill />}
                >
                    <h3 className="vertical-timeline-element-title">B. Tech Electrical & Electronics Engineering (EEE)</h3>
                    <p>
                        NITMAS (MAKAUT)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2018-2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BsFillHddNetworkFill />}
                >
                    <h3 className="vertical-timeline-element-title">M. Tech Power Electronics and Electrical Drives (PEED)</h3>
                    <p>
                        Indian Institute of Technology IIT-ISM Dhanbad
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="October, 2016 Present"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BsFillHddNetworkFill />}
                >
                    <h3 className="vertical-timeline-element-title">Relaince Jio Platform Ltd. | Data Analyst</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May, 2021"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BsFillHddNetworkFill />}
                >
                    <h3 className="vertical-timeline-element-title">Promoted as Manager</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Apr, 2020"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchoolOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Promoted as Deputy Manager</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    date="jan,2019"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchoolOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Transferred to Navi Mumbai ,Maharastra(India)</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    date="Oct,2016"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchoolOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Joind as Asst Manager, at Kolkata,west Bengal(India)</h3>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}
