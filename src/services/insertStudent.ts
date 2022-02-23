import connection from "../data/connection"

export const insertStudent = async (id: string, name: string, email: string, birth_date: string, class_id: string): Promise<void> => {

    await connection('student')
        .insert({
            id,
            name,
            email,
            birth_date,
            class_id
        })
}