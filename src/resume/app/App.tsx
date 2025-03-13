import React from 'react'
import './App.css'
import data from './data.json'
import Timeline from './Timeline'
import Job from './Job'
import ReactMarkdown from 'react-markdown'

function App() {
    console.log(data);
    const jobs = data.jobs.map(j => {
        const startDate = Date.parse(j.start)
        const endDate = Date.parse(j.end)
        const length = endDate - startDate;
        return {
            ...j,
            startDate,
            endDate,
            length
        }
    })
    const jobElements = jobs.map(j => (<Job key={j.employer} job={j} />))
    return (
        <div className="app">
            <div className="header">
                <div className="header--whoami">
                    <h1>Dusty Jewett</h1>
                    <div className="header--parenthetical">(is a Software Engineeer based in)
                        <br />
                        <a href="https://dusty.is/a/software.engineer/">https://dusty.is/a/software.engineer/</a>
                    </div>
                    <div>Seattle, WA</div>
                </div>
                <Timeline data={{jobs: jobs}} />
            </div>

            <div className="content">
                <ReactMarkdown>{data.summary}</ReactMarkdown>
                {jobElements}
            </div>
        </div>
    )
}

export default App
