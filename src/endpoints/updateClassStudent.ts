import { updateStudent } from './../services/updateStudent';
import { Request, Response } from "express"

export const updateClassStudent = async (req: Request, res: Response) => {
    try {
        const { idStudent, idClass } = req.body

        await updateStudent(idStudent, idClass)

        res.send("Turma atualizada.")

    } catch (error: any) {
        res.send(error)
    }
}