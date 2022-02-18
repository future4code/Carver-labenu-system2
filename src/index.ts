import { updateClassStudent } from './endpoints/updateClassStudent';
import { getStudentByName } from './endpoints/getStudentByName';
import { createStudent } from './endpoints/createStudent';
import { app } from "./app";


//STUDENT

app.post("/student", createStudent)
app.get("/student", getStudentByName)
app.put("/student/class", updateClassStudent)

