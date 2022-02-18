import { Request, Response } from "express";
import { Teachers } from "../classes/Teachers.class";

export const createTeacher = (req: Request, res: Response) => {
    try {
        const { name, email, birth_date, class_id, specialty } = req.body
        new Teachers(name, email, birth_date, class_id, specialty)
        res.status(201).send("Professor criado.")

    } catch (error: any) {
        res.send(error.message)
    }
}