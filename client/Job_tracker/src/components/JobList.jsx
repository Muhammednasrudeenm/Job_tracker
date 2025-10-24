import React from 'react';
import JobCard from  './JobCard'


export default function JobList({ jobs, onRefresh }){
if (!jobs.length) return <div>No jobs yet</div>;
return (
<div>
{jobs.map(j=> <JobCard key={j._id} job={j} onRefresh={onRefresh} />)}
</div>
);
}