import connection from "../data/connection"

export const getStudent = async (name: string, email: string, id: string) => {
    
    const result = await connection("student")
        .select()
        .where("student.name", "LIKE", `%${name}%`)
        .andWhere("student.email", "LIKE", `%${email}%`)
        .andWhere("student.id", id)

    return result

}