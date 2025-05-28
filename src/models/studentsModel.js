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
  },

  async updateStudentById(id, studentData) {
    const {
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
    } = studentData;

    const result = await db.query(
      `UPDATE students SET 
        student_name = $1, date_birth = $2, parent_id = $3, address = $4, 
        num_absences = $5, tutor_id = $6, registration = $7, student_surname = $8, 
        student_fullname = $9, gender = $10, school_age = $11, school_id = $12, 
        primary_contact = $13, post_code = $14, medical_flags = $15, 
        academic_house_id = $16, year_code_id = $17 
       WHERE id = $18 RETURNING *`,
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
        year_code_id,
        id
      ]
    );
    return result.rows[0];
  },

  async deleteStudentById(id) {
    const result = await db.query(
      'DELETE FROM students WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
};

module.exports = StudentsModel;