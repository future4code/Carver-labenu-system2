import connection from "../data/connection"

export const getStudent = async (name: string, email: string) => {
    return await connection("student")
        .select()
        .where("student.name", "LIKE", `%${name}%`)
        .andWhere("student.email", "LIKE", `%${email}%`)

}