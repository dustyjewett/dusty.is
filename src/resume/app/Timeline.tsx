import React from 'react'
import './Timeline.css';

function Timeline(props) {
    console.log(props.data);
    const today = Date.now();
    const firstDate = Date.parse(props.data.jobs[props.data.jobs.length-1].start)

    const fullSpan = today - firstDate;

    const jobs = props.data.jobs.map((job) => {
        const jobSpan = job.length / fullSpan * 100;
        const jobStyle = {
            background: job.primaryColor,
            width: `${jobSpan}%`
        }
        return (
            <a key={job.employer} style={jobStyle} href={`#${job.employer}`} title={job.employer}>&nbsp;</a>
        )
    })
    return (
        <div className="timeline">
            <ol>
                {jobs}
            </ol>
        </div>
    )
}

export default Timeline