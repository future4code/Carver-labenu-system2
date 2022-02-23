import connection from "../data/connection"
import { selectIdSpecialty } from "./selectIdSpecialty"
import { InsertSpecialtyTeacher } from "./InsertSpecialtyTeacher"

export const InsertTeachers = async (
    id: string,
    name: string,
    email: string,
    class_id: string,
    birth_date: string,
    specialty: string[]
) => {
    //criar teacher
    const newTeacher = {
        id: id, name: name, email: email, birth_date: birth_date, class_id: class_id
    }
    await connection("teacher").insert(newTeacher)
    //insere especialidaade do professor dentro de tabela teacher_specialty
    const getSpecialtyId = specialty.map(async (specialty: any) => {
        await selectIdSpecialty(specialty).then(res => {
            if (res.length > 0) {
                InsertSpecialtyTeacher(id, res[0].id)
            }
        })

    })

}