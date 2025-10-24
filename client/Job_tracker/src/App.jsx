import React, { useState, useEffect } from 'react';
import JobForm from './components/JobForm';
import JobCard from './components/JobCard';
import api from './api';
import './App.css';

export default function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await api.get('/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="app-container">
      <div className="job-form-container">
        <JobForm onAdded={fetchJobs} />
      </div>
      <div className="job-list">
        {jobs.map(job => (
          <JobCard key={job._id} job={job} onRefresh={fetchJobs} />
        ))}
      </div>
    </div>
  );
}
