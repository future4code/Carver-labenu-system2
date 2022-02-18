import connection from "../data/connection"

export const insertHobby = async (name: string) => {
    await connection("hobby")
    .insert({
        id: Date.now().toString(),
        name: name
    })
}