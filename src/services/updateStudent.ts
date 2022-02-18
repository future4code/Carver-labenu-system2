import connection from "../data/connection"

export const updateStudent = async (idStudant: string, idClass: string) => {
    await connection("student")
        .update("student.class_id", idClass)
        .where("student.id", idStudant)
}