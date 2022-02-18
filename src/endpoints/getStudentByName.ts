import { getStudent } from './../services/getStudent';
import { Request, Response } from "express";

export const getStudentByName = async (req: Request, res: Response) => {
    try {
        const name = req.query.name as string || "%"
        const student = await getStudent(name)

        res.status(200).send({
            students: student
        })

    } catch (error: any) {
        res.send(error.message)
    }
}