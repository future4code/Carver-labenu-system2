import { Request, Response } from "express";
import { Student } from "../classes/Student.class";

export const createStudent = (req: Request, res: Response) => {
    try {

        const { name, email, birth_date, class_id, hobbies } = req.body
        const response = new Student(name, email, birth_date, class_id, hobbies)
        res.status(201).send("Usuário criado.")
        
    } catch (error: any) {
        res.send(error.message)
    }
}