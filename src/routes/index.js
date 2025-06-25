// routes/index.js
const express = require('express');
const router = express.Router();
const xlsx = require('xlsx');
const path = require('path');

router.get('/benes-data', (req, res) => {
    const workbook = xlsx.readFile(path.join(__dirname, '../public/docs/Benes.xlsx'));
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet, { range: 1 });

    if (!data || data.length === 0) {
        return res.status(404).json({ error: 'No data found in Excel sheet.' });
    }

    const firstRow = data[0];

    function parseValue(str) {
        if (typeof str !== 'string') return { count: 0, points: 0 };
        const match = str.match(/^(\d+)\[(-?\d+)\]$/);
        return match ? { count: parseInt(match[1]), points: parseInt(match[2]) } : { count: 0, points: 0 };
    }

    const benesRaw = parseValue(firstRow['Positive[PTS]']);
    const sanctionsRaw = parseValue(firstRow['Negative[PTS]']);
    const totalRaw = parseValue(firstRow['Total[PTS]']);

    res.json({
        academicHouse: firstRow['House'] || '',
        form: firstRow['Form'] || '',
        year: firstRow['Year'] || '',
        benes: benesRaw.count,
        benesPoints: benesRaw.points,
        sanctions: sanctionsRaw.count,
        sanctionsPoints: sanctionsRaw.points,
        total: totalRaw.count,
        totalPoints: totalRaw.points
    });
});

// Rotas principais
router.get('/', (req, res) => {
  res.render('pages/login');
});

router.get('/benes', (req, res) => {
  res.render('pages/benes');
});

router.get('/assignments', (req, res) => {
  res.render('pages/assignments');
});

router.get('/choose', (req, res) => {
  res.render('pages/choose');
});

router.get('/communication', (req, res) => {
  res.render('pages/communication');
});

router.get('/customerservice', (req, res) => {
  res.render('pages/customerservice');
});

router.get('/login', (req, res) => {
  res.render('pages/login');
});

router.get('/reports', (req, res) => {
  res.render('pages/reports');
});

router.get('/timetable', (req, res) => {
  res.render('pages/timetable');
});


module.exports = router;