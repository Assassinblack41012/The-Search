import React from 'react';
import './Job.css';
import {Link} from 'react-router-dom';

const Job = (props) => (
  <div className="form-control">
      <h2>Job List:</h2>     
      <div className="listCards">
    {props.jobs.length ? 
      props.jobs.map((job, idx) =>
      <div className="jobCard">
        <li key={job._id}>
            <dl>
              <dt>Position:</dt>
              <dd>{job.position}</dd>
              <dt>Company:</dt>
              <dd>{job.company}</dd>
              <dt>Location:</dt>
              <dd>{job.location}</dd>
            </dl>
            <Link 
              className='detailsLink' 
              to={{
                pathname: '/editjob',
                state: {job},
                idx: idx
              }}>
                Details/Edit
            </Link>
              <button className='deleteBtn' onClick={() => props.handleDeleteJob(idx)}>X</button>
          </li>
    </div>
      )
      : <div></div>
    }
    </div>
  </div>
  )

export default Job;