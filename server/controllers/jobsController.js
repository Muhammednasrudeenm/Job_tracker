const Job = require('../models/job');


exports.getJobs = async (req, res) => {
try {
const jobs = await Job.find().sort({ createdAt: -1 });
res.json(jobs);
} catch (err) {
res.status(500).json({ error: 'Server error' });
}
};


exports.createJob = async (req, res) => {
try {
const job = new Job(req.body);
await job.save();
res.status(201).json(job);
} catch (err) {
res.status(400).json({ error: 'Invalid data' });
}
};


exports.updateJob = async (req, res) => {
try {
const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!job) return res.status(404).json({ error: 'Not found' });
res.json(job);
} catch (err) {
res.status(400).json({ error: 'Invalid data' });
}
};


exports.deleteJob = async (req, res) => {
try {
const job = await Job.findByIdAndDelete(req.params.id);
if (!job) return res.status(404).json({ error: 'Not found' });
res.json({ message: 'Deleted' });
} catch (err) {
res.status(500).json({ error: 'Server error' });
}
};