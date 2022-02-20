import { selectStudentsHobbies } from './../services/selectStudentsHobbies';
import { Request, Response } from "express"

export const getStudentsByHobby = async (req: Request, res: Response) => {
    try {
        const name = req.query.name as string

        if (!name) {
            throw new Error("Query name não enviado.")
        }

        const students = await selectStudentsHobbies(name)

        if (!students.length) {
            throw new Error("Hobby não encontrado.")
        }

        res.status(200).send({
            students: students
        })

    } catch (error) {

        if (error instanceof Error) {
            switch (error.message) {
                case "Hobby não encontrado.":
                    res.status(404)
                    break
                case "Query name não enviado.":
                    res.status(422)
                    break
                default: res.status(500)
            }

            res.send(error.message)
        }
    }
}