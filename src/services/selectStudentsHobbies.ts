import connection from "../data/connection"

export const selectStudentsHobbies = async (name: string) => {
    return await connection("hobby")
        .select("student.id", "student.name", "student.email", "student.birth_date", "student.class_id")
        .join("student_hobby", "student_hobby.hobby_id", "hobby.id")
        .join("student", "student.id", "student_hobby.student_id")
        .where("hobby.name", "LIKE", `%${name}%`)
}