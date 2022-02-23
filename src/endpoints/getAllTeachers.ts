import { Request, Response } from "express"
import { modifyBirthDate } from "../services/modifyBirthDate"
import { selectAllTeachers } from "../services/SelectAllTeachers"

export const getAllTeachers = async (req: Request, res: Response): Promise<void> => {
    try {
        let results = await selectAllTeachers()
        modifyBirthDate(results)
        res.status(200).send(results)

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
        }
    }
}