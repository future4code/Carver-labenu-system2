import { updateClassStudent } from './endpoints/updateClassStudent';
import { getStudents } from './endpoints/getStudent';
import { createStudent } from './endpoints/createStudent';
import { app } from "./app";
import { getStudentsByHobby } from './endpoints/getStudentsHobby';

//STUDENT

app.post("/student", createStudent)
app.get("/student", getStudents)
app.get("/student/hobby", getStudentsByHobby)
app.put("/student/class", updateClassStudent)