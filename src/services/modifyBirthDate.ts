export const modifyBirthDate=(array:any)=>{
    return array.forEach((result:any) => {
        result.birth_date = result.birth_date.toLocaleDateString()
        })
}
//tete