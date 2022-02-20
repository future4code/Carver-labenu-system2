import { verificateAge } from './../services/verificateAge';
import { selectClass } from './../services/selectClass';
import { validateDate } from './../services/validateDate';
import { getStudent } from './../services/getStudent';
import { Request, Response } from "express";
import { Student } from "../classes/Student.class";

export const createStudent = async (req: Request, res: Response) => {
    try {

        const { name, email, birth_date, class_id, hobbies } = req.body

        // VERIFICAÇÕES

        if (!name || !email || !birth_date || !class_id || !hobbies) {
            throw new Error("Algum parâmetro não foi enviado.")
        }

        const verificateEmail = await getStudent("%", email, "%")

        if (verificateEmail.length) {
            throw new Error("Esse email já existe.")
        }

        if (validateDate(birth_date) === false) {
            throw new Error("Birth_date está no formato errado: DD/MM/YYYY")
        }

        if (verificateAge(birth_date) === false) {
            throw new Error("Você colocou uma data maior que a atual ou não possui idade o suficiente para fazer parte da Labenu")
        }

        const verificateClass = await selectClass(class_id)

        if (!verificateClass.length) {
            throw new Error("Turma não encontrada.")
        }

        if (!hobbies.length) {
            throw new Error("Hobbies não enviados")
        }

        // ----------------------------------------------------------

        new Student(name, email, birth_date, class_id, hobbies)
        res.status(201).send("Usuário criado.")

    } catch (error) {
        if (error instanceof Error) {
            switch (error.message) {

                case "Turma não encontrada.":
                    res.status(404)
                    break
                case "Esse email já existe.":
                    res.status(409)
                    break
                case "Algum parâmetro não foi enviado.":
                    res.status(422)
                    break
                case "Birth_date está no formato errado: DD/MM/YYYY":
                    res.status(422)
                    break
                case "Hobbies não enviados":
                    res.status(422)
                    break
                case "Você colocou uma data maior que a atual ou não possui idade o suficiente para fazer parte da Labenu":
                    res.status(422)
                    break
                default: res.status(500)
                
            }

            res.send(error.message)
        }
    }
}