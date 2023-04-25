import axios from 'axios'


const apiInstance = axios.create({})


export const getStudents = ()=>{
    return apiInstance({
        url: '/api/student',
        method: 'GET'
    })
}
