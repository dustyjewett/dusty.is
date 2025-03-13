import React from 'react'
import './Job.css';
import Project from './Project';
import ReactMarkdown from 'react-markdown';
import { timestampToMonthYear } from './utils';

function Job({job}) {
    const projects = job.projects?.map(p => (<Project key={job.name} job={job} project={p} />))
    return (
        <div className="job">
            <a className='anchor' id={job.employer} />
            <h2 className='job--header'>{job.employer} <span className="job--title">《{job.title}》</span></h2>
            <div style={{backgroundColor: job.primaryColor}} className="job--timeline">
                <div className="job--timeline__end">
                    {timestampToMonthYear(job.endDate)}
                </div>
                <div className="job--timeline__start">
                    {timestampToMonthYear(job.startDate)}
                </div>
            </div>
            <ReactMarkdown>{job.description}</ReactMarkdown>
            {projects}
        </div>
    )
}

export default Job