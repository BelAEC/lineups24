const fs = require('fs');
const path = require('path');

// Path to track when the task was last run
const LAST_RUN_FILE = path.join(__dirname, 'last-run.json');

// Get the current date
const today = new Date();
const todayDate = today.toISOString().split('T')[0]; // YYYY-MM-DD

// Get last Saturday
const getLastSaturday = () => {
  const d = new Date(today);
  const day = d.getDay(); // 0 = Sunday, 6 = Saturday
  const diff = day >= 6 ? day - 6 : day + 1;
  d.setDate(d.getDate() - diff);
  return d.toISOString().split('T')[0];
};

// Load last run date
let lastRun = null;
if (fs.existsSync(LAST_RUN_FILE)) {
  const data = JSON.parse(fs.readFileSync(LAST_RUN_FILE, 'utf8'));
  lastRun = data.date;
}

// If it's Saturday or later and we haven't run since this week's Saturday
const lastSaturday = getLastSaturday();
if (lastRun !== lastSaturday) {
  console.log('✅ Running weekly task...');

  // 👇 Your real task goes here
  require('./craUpdate1.js'); // assuming it's in same folder

  // Save this run
  fs.writeFileSync(LAST_RUN_FILE, JSON.stringify({ date: lastSaturday }, null, 2));
} else {
  console.log('⏭ Already ran this week, skipping.');
}
