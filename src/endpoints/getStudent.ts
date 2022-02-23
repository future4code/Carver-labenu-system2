import { modifyBirthDate } from './../services/modifyBirthDate';
import { getStudent } from '../services/selectStudent';
import { Request, Response } from "express";

export const getStudents = async (req: Request, res: Response) => {
    try {
        const name = req.query.name as string || "%"

        // VERIFICAÇÕES

        if (!name) {
            throw new Error("Parâmetro não enviado.")
        }

        const student = await getStudent(name, "%", "%")

        if (!student.length) {
            throw new Error("Estudante não encontrado.")
        }

        modifyBirthDate(student)
        // ----------------------------------------------------------

        res.status(200).send({
            students: student
        })

    } catch (error) {
        if (error instanceof Error) {
            switch (error.message) {

                case "Estudante não encontrado.":
                    res.status(404)
                    break
                case "Parâmetro não enviado.":
                    res.status(422)
                    break
                default: res.status(500)

            }

            res.send(error.message)
        }
    }
}