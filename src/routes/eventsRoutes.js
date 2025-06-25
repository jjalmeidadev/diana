const express = require('express');
const router = express.Router();
const EventsController = require('../controllers/eventsController');
const db = require('../config/db');

// Render events.ejs with filtered data
router.get('/events', async (req, res) => {
    try {
        const userId = 49000000; // Example user ID

        const query = `
            SELECT 
                e.id,
                e.concept,
                e.event_datetime,
                e.description,
                e.image_url,
                e.student_id
            FROM events e
            LEFT JOIN students s ON e.student_id = s.id
            WHERE e.student_id IS NULL OR s.parent_id = $1
            ORDER BY e.event_datetime ASC
        `;

        const result = await db.query(query, [userId]);

        const events = result.rows;

        res.render('pages/events', { events });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).send('Internal Server Error');
    }
});


// API Routes

// Get all events
router.get('/events', EventsController.getAllEvents);

// Get event by ID 
router.get('/events/:id', EventsController.getEventById);

// Create event
router.post('/events', EventsController.createEvent);

// Update event by ID 
router.put('/events/:id', EventsController.updateEventById);

// Delete event by ID 
router.delete('/events/:id', EventsController.deleteEventById);


module.exports = router;
