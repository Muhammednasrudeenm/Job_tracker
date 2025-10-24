import React, { useState } from 'react';
import api from '../api';
import './JobForm.css';

export default function JobForm({ onAdded }) {
  const [form, setForm] = useState({ company: '', position: '', dateApplied: '', status: 'Applied', notes: '' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/jobs', form);
      setForm({ company: '', position: '', dateApplied: '', status: 'Applied', notes: '' });
      onAdded();
    } catch (err) {
      alert('Error adding job');
    }
  };

  return (
    <div className="job-form-container">
      <form className="job-form" onSubmit={submit}>
        <input
          required
          placeholder="Company"
          value={form.company}
          onChange={e => setForm({ ...form, company: e.target.value })}
        />
        <input
          required
          placeholder="Position"
          value={form.position}
          onChange={e => setForm({ ...form, position: e.target.value })}
        />
        <input
          type="date"
          value={form.dateApplied}
          onChange={e => setForm({ ...form, dateApplied: e.target.value })}
        />
        <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
          <option>Withdrawn</option>
        </select>
        <input
          placeholder="Notes"
          value={form.notes}
          onChange={e => setForm({ ...form, notes: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
