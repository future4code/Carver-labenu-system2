export const verificateAge = (birth_date: string): boolean => {
    const dataSplit = birth_date.split('/')
    const birth = new Date(+dataSplit[2], +dataSplit[1] - 1, +dataSplit[0]).getTime()
    const today: number = Date.now()
    const age: number = Math.ceil(Math.abs(today - birth)) / (1000 * 60 * 60 * 24 * 365)

    return today > birth && age >= 18
}