import connection from "../data/connection"
import { Student } from "../Interfaces/Student.interface"

export const selectStudentsHobbies = async (hobby: string): Promise<Student[]> => {
    return await connection("hobby")
        .select("student.id", "student.name", "student.email", "student.birth_date", "student.class_id")
        .join("student_hobby", "student_hobby.hobby_id", "hobby.id")
        .join("student", "student.id", "student_hobby.student_id")
        .where("hobby.name", "LIKE", `%${hobby}%`)
}