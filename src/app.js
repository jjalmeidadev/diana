const path = require("path");
const express = require("express");
const app = express();
const academicHouseRoutes = require('./routes/academicHouse');
const eventsRoutes = require('./routes/eventsRoutes');
const reportsRoutes = require('./routes/reportsRoutes');
const student_subjectRoutes = require('./routes/student_subjectModels')
const subjectsRoutes = require('./routes/subjectsRoutes');
const studentsRoutes = require('./routes/studentsRoutes');
const teachersRoutes = require('./routes/teachersRoutes');
const tutorsRoutes = require('./routes/tutorsRoutes');
const userRoutes = require('./routes/usersRoutes');
const yearCodeRoutes = require('./routes/year_codeRoutes');

app.get("/", (req, res) => {
    res.sendFile("index.html", {
        root: path.join(__dirname)
    });
});

app.get("/about", (req, res) => {
    res.send("My business is so cool!!11!!");
});

app.use('/', academicHouseRoutes);
app.use('/', eventsRoutes);
app.use('/', reportsRoutes);
app.use('/', student_subjectRoutes);
app.use('/', subjectsRoutes);
app.use('/', studentsRoutes);
app.use('/', teachersRoutes);
app.use('/', tutorsRoutes);
app.use('/', userRoutes);
app.use('/', yearCodeRoutes);

app.listen(3000, () => {
    console.log("The server is now running on Port 3000");
});
