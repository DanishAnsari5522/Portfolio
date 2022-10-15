import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.css'


export default function Timeline() {
    return (
        <div bsPrifix>
            <VerticalTimeline className="line">
                <VerticalTimelineElement
                    contentStyle={{ background: "black", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #f00" }}
                    iconStyle={{ background: "blue", color: "White" ,display:'flex',alignItems:'center',justifyContent:'center' }}
                    icon="2021"
                >
                    <h3 className="vertical-timeline-element-title">
                        Visitenkarte erstellen
                    </h3>
                    <p>
                        Lege Deine Visitenkarte an, damit Du Dich bei einem passenden Mieter
                        vorstellen kannst
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "black", color: "#fff" }}
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff",display:'flex',alignItems:'center',justifyContent:'center' }}
                    icon="2021"
                >
                    <h3 className="vertical-timeline-element-title">
                        Mietobjekt anlegen
                    </h3>
                    <p>Lege Dein Mietobjekt und lasse Dir passende Mieter zeigen</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "black", color: "#fff" }}
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" ,display:'flex',alignItems:'center',justifyContent:'center'}}
                    icon="2021"
                >
                    <h4 className="vertical-timeline-element-subtitle">
                        Passender Mieter gefunden
                    </h4>
                    <p>
                        Nun werden Dir Mieter, die Deinen Suchkriterien entsprechen
                        angezeigt.
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "black", color: "#fff" }}
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff",display:'flex',alignItems:'center',justifyContent:'center' }}
                    icon="2021"
                >
                    <h4 className="vertical-timeline-element-subtitle">
                        Daten & Dokumente einsehen
                    </h4>
                    <p>
                        Nun werden Dir Mieter, die Deinen Suchkriterien entsprechen
                        angezeigt.
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "black", color: "#fff" }}
                    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" ,display:'flex',alignItems:'center',justifyContent:'center'}}
                    icon="2021"
                >
                    <h4 className="vertical-timeline-element-subtitle">
                        Persönliche Besichtigung
                    </h4>
                    <p>
                        Kennenlernen und Wohnungsbesichtung mit dem Wissen, dass die
                        grundlegenden Fakten passen!
                    </p>
                </VerticalTimelineElement>

                {/* END */}
                <VerticalTimelineElement
                    iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff",display:'flex',alignItems:'center',justifyContent:'center' }}
                    icon="2021"
                />
            </VerticalTimeline>
        </div>
    );
}
