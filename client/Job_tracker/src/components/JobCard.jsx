import React, { useState } from 'react';
import api from '../api';
import './JobCard.css';

export default function JobCard({ job, onRefresh }) {
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState(job.status);
  const statuses = ['Applied', 'Interview', 'Offer', 'Rejected', 'Withdrawn'];

  const remove = async () => {
    if (!confirm('Delete this job?')) return;
    await api.delete(`/jobs/${job._id}`);
    onRefresh();
  };

  const saveStatus = async () => {
    await api.put(`/jobs/${job._id}`, { status });
    setEditing(false);
    onRefresh();
  };

  return (
    <div className="job-card">
      <div className="job-card-top">
        <div className="job-info">
          <strong className="job-company">{job.company}</strong>
          <span className="job-position">{job.position}</span>
          <div className="job-date">Applied on: {new Date(job.dateApplied).toLocaleDateString()}</div>
        </div>
        <div className="job-status">
          {editing ? (
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              {statuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          ) : (
            <span className={`status-badge status-${status.replace(' ', '-')}`}>{status}</span>
          )}
        </div>
      </div>

      {job.notes && <div className="job-notes">{job.notes}</div>}

      <div className="job-buttons">
        {editing ? (
          <>
            <button className="save-btn" onClick={saveStatus}>Save</button>
            <button className="cancel-btn" onClick={() => setEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button className="update-btn" onClick={() => setEditing(true)}>Update Status</button>
            <button className="delete-btn" onClick={remove}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}
