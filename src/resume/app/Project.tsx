import React from 'react'
import ReactMarkdown from 'react-markdown';
import './Project.css';
import { timestampToMonthYear } from './utils';

function Project({job, project}) {

    const startDate = Date.parse(project.start)
    const endDate = Date.parse(project.end)
    const endPercentage = (job.endDate - endDate) / job.length * 100
    const startPercentage = (startDate - job.startDate) / job.length * 100;
    const hrStyle = {
        backgroundColor: job.primaryColor,
        marginLeft: `${endPercentage}%`,
        marginRight: `${startPercentage}%`
    }
    console.log(job, project, hrStyle)
    return (
        <>
            <h3>{project.name} <span className="project--role">《{project.role}》</span></h3>
            <div className="project--timeline">
                <div
                    style={hrStyle}
                    className="project--timeline__bar"
                >
                    <div className="project--timeline__end">
                        {timestampToMonthYear(endDate)}
                    </div>
                    <div className="project--timeline__start">
                        {timestampToMonthYear(startDate)}
                    </div>
                </div>
            </div>
            <ReactMarkdown>{project.description}</ReactMarkdown>
        </>
    )
}

export default Project