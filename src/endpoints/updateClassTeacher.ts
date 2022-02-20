import { updateTeacher } from "../services/updateTeacher";
import { Response, Request } from "express";
import { selectClass } from "../services/selectClass";
import { selectTeacherById } from "../services/selectTeacherById";

export const updateClassTeacher = async (req: Request, res: Response) => {
    try {
        const { teach_Id, class_id } = req.body
        if (!teach_Id || !class_id) {
            throw new Error("Preencha os dois campos, tanto o teach_Id quanto class_id.")
        }
        if (typeof teach_Id !== "string" || typeof class_id !== "string") {
            throw new Error("O  tipo aceito das propriedades teach_Id e class_id é string, por favor preencha de forma correta.")
        }

        const result = await selectClass(class_id)
        const consult = await selectTeacherById(teach_Id,"%")
        if (result.length && consult.length) {
            await updateTeacher(teach_Id, class_id)
        }
        else {
            throw new Error("teach_Id ou classs_id não existente.")
        }


        res.status(200).send("Turma atualizada")
    }
    catch (error) {
        if (error instanceof Error) {
            switch (error.message) {
                case "teach_Id ou classs_id não existente.":
                    res.status(404)
                    break
                case "O  tipo aceito das propriedades teach_Id e class_id é string, por favor preencha de forma correta.":
                    res.status(422)
                    break
                case "Preencha os dois campos, tanto o teach_Id quanto class_id.":
                    res.status(422)
                    break
                default:
                res.status(500)
            }
            res.send(error.message)
        }

    }
}

