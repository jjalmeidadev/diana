const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Define all your pages and their file locations
const pages = [
  { name: 'Assignments', path: '/assignments', file: 'assignments.ejs' },
  { name: 'Benes', path: '/benes', file: 'benes.ejs' },
  { name: 'Choose', path: '/choose', file: 'choose.ejs' },
  { name: 'Communication', path: '/communication', file: 'communication.ejs' },
  { name: 'Events', path: '/events', file: 'events.ejs' },
  { name: 'CustomerService', path: '/customerservice', file: 'customerservice.ejs' },
  { name: 'Login', path: '/login', file: 'login.ejs' },
  { name: 'Reports', path: '/reports', file: 'reports.ejs' },
  { name: 'Timetable', path: '/timetable', file: 'timetable.ejs' },
  { name: 'Profile', path: '/profile', file: 'profile.ejs' }
];

router.get('/', async (req, res) => {
  const query = (req.query.q || '').toLowerCase();
  if (!query) {
    return res.redirect('/');
  }

  // Search through each EJS file content
  for (const page of pages) {
    try {
      const filePath = path.join(__dirname, '..', 'views', 'pages', page.file);
      const fileContent = fs.readFileSync(filePath, 'utf8').toLowerCase();

      if (fileContent.includes(query)) {
        return res.redirect(page.path);
      }
    } catch (err) {
      console.error(`Error reading file for page ${page.name}:`, err);
    }
  }

  res.status(404).send('No page found containing that term.');
});

module.exports = router;
