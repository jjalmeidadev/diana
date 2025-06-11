const db = require('../config/db');

const EventsModel = {
  async getAllEvents() {
    const result = await db.query('SELECT * FROM events');
    return result.rows;
  },

  async getEventById(id) {
    const result = await db.query('SELECT * FROM events WHERE id = $1', [id]);
    return result.rows[0];
  },

  async createEvent( concept, student_id ) {
    const result = await db.query(
      'INSERT INTO events (concept, student_id) VALUES ($1, $2) RETURNING *',
      [concept, student_id]
    );
    return result.rows[0];
  },

  async updateEventById(concept, student_id, id) {
    const result = await db.query(
      'UPDATE events SET concept = $1, student_id = $2 WHERE id = $3 RETURNING *',
      [concept, student_id, id]
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