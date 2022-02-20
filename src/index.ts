import { updateClassStudent } from './endpoints/updateClassStudent';
import { getStudentByName } from './endpoints/getStudentByName';
import { createStudent } from './endpoints/createStudent';
import { app } from "./app";
import { getStudentsByHobby } from './endpoints/getStudentsHobby';

//STUDENT

app.post("/student", createStudent)
app.get("/student", getStudentByName)
app.get("/student/hobby", getStudentsByHobby)
app.put("/student/class", updateClassStudent)