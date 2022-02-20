import connection from "../data/connection"
import { Student } from "../Interfaces/Student.interface"

export const getStudent = async (name: string, email: string, id: string): Promise<Student[]> => {

    const result = await connection("student")
        .where("student.name", "LIKE", `%${name}%`)
        .andWhere("student.email", "LIKE", `%${email}%`)
        .andWhere("student.id", "LIKE", `%${id}%`)

    return result

}