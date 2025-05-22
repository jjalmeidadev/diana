const db = require('../config/db');

const StudentsModel = {
  async getAllStudents() {
    const result = await db.query('SELECT * FROM students');
    return result.rows;
  },

  async getStudentById(id) {
    const result = await db.query('SELECT * FROM students WHERE id = $1', [id]);
    return result.rows[0];
  },

  async createStudent({
    student_name,
    date_birth,
    parent_id,
    address,
    num_absences,
    tutor_id,
    registration,
    student_surname,
    student_fullname,
    gender,
    school_age,
    school_id,
    primary_contact,
    post_code,
    medical_flags,
    academic_house_id,
    year_code_id
  }) {
    const result = await db.query(
      `INSERT INTO students (
        student_name, date_birth, parent_id, address, num_absences, tutor_id, registration,
        student_surname, student_fullname, gender, school_age, school_id, primary_contact,
        post_code, medical_flags, academic_house_id, year_code_id
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17
      ) RETURNING *`,
      [
        student_name,
        date_birth,
        parent_id,
        address,
        num_absences,
        tutor_id,
        registration,
        student_surname,
        student_fullname,
        gender,
        school_age,
        school_id,
        primary_contact,
        post_code,
        medical_flags,
        academic_house_id,
        year_code_id
      ]
    );
    return result.rows[0];
  }
};

module.exports = StudentsModel;