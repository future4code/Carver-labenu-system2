import { getStudent } from './../services/getStudent';
import { updateStudent } from './../services/updateStudent';
import { Request, Response } from "express"
import { selectClass } from '../services/selectClass';

export const updateClassStudent = async (req: Request, res: Response) => {
    try {
        const { student_id, class_id } = req.body

        //VERIFICAÇÕES

        if (!student_id || !class_id) {
            throw new Error("Algum parâmetro não foi enviado.")
        }

        const verificateStudent = await getStudent("%", "%", student_id)

        if (!verificateStudent.length) {
            throw new Error("Estudante não encontrado.")
        }

        const verificateClass = await selectClass(class_id)

        if (!verificateClass.length) {
            throw new Error("Turma não encontrada.")
        }

        // ----------------------------------------------------------

        await updateStudent(student_id, class_id)

        res.send("Turma atualizada.")

    } catch (error) {
        if (error instanceof Error) {
            switch (error.message) {

                case "Estudante não encontrado.":
                    res.status(404)
                    break
                case "Turma não encontrada.":
                    res.status(404)
                    break
                case "Algum parâmetro não foi enviado.":
                    res.status(422)
                    break
                default: res.status(500)

            }

            res.send(error.message)
        }
    }
}