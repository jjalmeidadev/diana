const db = require('../config/db');

const EventsModel = {
  async getAllEvents() {
    const result = await db.query(`
      SELECT 
        id, 
        concept, 
        description, 
        image_url, 
        event_datetime, 
        student_id
      FROM events
      ORDER BY event_datetime ASC
    `);
    return result.rows;
  },

  async getEventById(id) {
    const result = await db.query(
      'SELECT * FROM events WHERE id = $1',
      [id]
    );
    return result.rows[0];
  },

  async createEvent(concept, description, image_url, event_datetime, student_id) {
    const result = await db.query(
      `INSERT INTO events (concept, description, image_url, event_datetime, student_id) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [concept, description, image_url, event_datetime, student_id]
    );
    return result.rows[0];
  },

  async updateEventById(id, concept, description, image_url, event_datetime, student_id) {
    const result = await db.query(
      `UPDATE events 
       SET concept = $1, description = $2, image_url = $3, event_datetime = $4, student_id = $5 
       WHERE id = $6 
       RETURNING *`,
      [concept, description, image_url, event_datetime, student_id, id]
    );
    return result.rows[0];
  },

  async deleteEventById(id) {
    const result = await db.query(
      'DELETE FROM events WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
};

module.exports = EventsModel;
