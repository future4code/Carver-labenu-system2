import connection from "../data/connection"

export const insertHobbyStudent = async (student_id: string, hobby_id: string): Promise<void> => {

    await connection("student_hobby")
        .insert({
            id: Date.now().toString(),
            student_id: student_id,
            hobby_id: hobby_id
        })

}