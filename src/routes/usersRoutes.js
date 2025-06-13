// routes/index.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const db = require('../config/db');

router.get('/', (req, res) => {
  res.send('API funcionando!');
});


router.get('/assignments', (req, res) => {
  res.render('pages/assignments');
});
router.get('/customerservice', (req, res) => {
  res.render('pages/customerservice');
});
router.get('/events', (req, res) => {
  res.render('pages/events');
});
router.get('/timetable', (req, res) => {
  res.render('pages/timetable');
});
router.get('/benes', (req, res) => {
  res.render('pages/benes');
});
router.get('/login', (req, res) => {
  res.render('pages/login');
});
router.get('/profile', async (req, res) => {
    try {
        const userId = 49000000;

        // Query to fetch student data from the database
        const query = `
            SELECT 
                s.student_fullname,
                s.profimage_url,
                s.school_age,
                ${process.env.DB_DATE_FORMAT === 'true' ? "TO_CHAR(s.date_birth, 'YYYY-MM-DD')" : "s.date_birth"} AS date_birth,
                s.gender,
                s.registration,
                ah.house AS academic_house_id,
                yc.year_code AS year_code_id,
                t.name_tutor AS tutor_id,
                s.school_id,
                s.address,
                s.post_code,
                s.primary_contact,
                s.parent_id,
                s.primary_contact_forename,
                s.primary_contact_mobile,
                s.pupil_email,
                s.secondary_contact_email,
                s.secondary_contact_forename,
                s.secondary_contact_mobile,
                s.secondary_contact_surname,
                s.primary_contact_surname,
                s.relation_type,
                s.doctor_phone,
                s.medical_flags,
                s.medical_flag_notes,
                s.num_absences
            FROM students s
            LEFT JOIN academic_house ah ON s.academic_house_id = ah.id
            LEFT JOIN year_code yc ON s.year_code_id = yc.id
            LEFT JOIN tutors t ON s.tutor_id = t.id
            WHERE s.parent_id = $1
        `;

        const result = await db.query(query, [userId]);

        if (result.rows.length === 0) {
            console.error('No student data found for user ID:', userId);
            throw new Error('Student data not found');
        }

        const student = result.rows[0];

        res.render('pages/profile', { student });
    } catch (error) {
        console.error('Error fetching student data:', error.message);
        console.error('Stack Trace:', error.stack); 
        res.status(500).send('Internal Server Error');
    }
});
router.get('/reports', (req, res) => {
  res.render('pages/reports');
});

router.get('/users', userController.getAllUsers);       
router.get('/users/:id', userController.getUserById);    
router.post('/users', userController.createUser);      
router.put('/users/:id', userController.updateUserById);     
router.delete('/users/:id', userController.deleteUserById);

module.exports = router;