const db = require('../config/db');

const ReportsModel = {
  async getAllReports() {
    const result = await db.query('SELECT * FROM reports');
    return result.rows;
  },

  async getReportById(id) {
    const result = await db.query('SELECT * FROM reports WHERE id = $1', [id]);
    return result.rows[0];
  },

  async createReport(date_report, student_id) {
    const result = await db.query(
      'INSERT INTO reports (date_report, student_id) VALUES ($1, $2) RETURNING *',
      [date_report, student_id]
    );
    return result.rows[0];
  },

  async updateReportById(date_report, student_id, id) {
    const result = await db.query(
      'UPDATE reports SET date_report = $1, student_id = $2 WHERE id = $3 RETURNING *',
      [date_report, student_id, id]
    );
    return result.rows[0];
  },

  async deleteReportById(id) {
    const result = await db.query(
      'DELETE FROM reports WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
};

module.exports = ReportsModel;