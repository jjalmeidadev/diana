CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  password VARCHAR(255),
  type_of_user VARCHAR(50)
);

CREATE TABLE tutors (
  id SERIAL PRIMARY KEY,
  name_tutor VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  teacher_name VARCHAR(255),
  teacher_email VARCHAR(255)
);

CREATE TABLE academic_house (
  id SERIAL PRIMARY KEY,
  house VARCHAR(100)
);

CREATE TABLE year_code (
  id SERIAL PRIMARY KEY,
  year_code INTEGER
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  student_name VARCHAR(255),
  date_birth DATE,
  parent_id INTEGER REFERENCES users(id),
  address VARCHAR(255),
  num_absences INTEGER,
  tutor_id INTEGER REFERENCES tutors(id),
  registration INTEGER,
  student_surname VARCHAR(255),
  student_fullname VARCHAR(255),
  gender VARCHAR(20),
  school_age FLOAT,
  school_id INTEGER,
  primary_contact VARCHAR(255),
  post_code VARCHAR(20),
  medical_flags VARCHAR(255),
  academic_house_id INTEGER REFERENCES academic_house(id),
  year_code_id INTEGER REFERENCES year_code(id)
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  concept VARCHAR(255),
  student_id INTEGER REFERENCES students(id)
);

CREATE TABLE reports (
  id SERIAL PRIMARY KEY,
  date_report TIMESTAMP,
  student_id INTEGER REFERENCES students(id)
);

CREATE TABLE subjects (
  id SERIAL PRIMARY KEY,
  name_subject VARCHAR(255),
  teacher_id INTEGER REFERENCES teachers(id)
);

CREATE TABLE student_subject (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  subject_id INTEGER REFERENCES subjects(id),
  grade INTEGER
);
