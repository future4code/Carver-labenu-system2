import connection from "../data/connection"
import { Hobby } from "../Interfaces/Hobby"

export const getHobbies = async (name: string): Promise<Hobby[]> => {
    return await connection("hobby")
        .select()
        .where("hobby.name", name)

}