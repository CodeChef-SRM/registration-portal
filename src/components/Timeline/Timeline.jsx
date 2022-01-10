import React from 'react'
import timelineData from "../../assets/js/TimelineItem"
import TimelineItem from '../TimelineItem/TimelineItem';
import "./Timeline.css"

const Timeline = () => {
    return (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    )
}

export default Timeline
