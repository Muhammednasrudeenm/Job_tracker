const mongoose = require('mongoose');


const JobSchema = new mongoose.Schema({
company: { type: String, required: true },
position: { type: String, required: true },
dateApplied: { type: Date, default: Date.now },
status: { type: String, enum: ['Applied','Interview','Offer','Rejected','Withdrawn'], default: 'Applied' },
notes: { type: String }
}, { timestamps: true });


module.exports = mongoose.model('Job', JobSchema);