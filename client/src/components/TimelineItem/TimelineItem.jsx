import React from 'react'
import "./TimelineItem.css"

const TimelineItem = (props) => {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <h3 className="timeline-card-heading">{props.data.date}</h3>
                <p className="timeline-card-desc">{props.data.desc}</p>
                <span className="circle"></span>
            </div>
        </div>
    )
}

export default TimelineItem
