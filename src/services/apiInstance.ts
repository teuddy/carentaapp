import { data } from 'autoprefixer'
import axios from 'axios'
import { Listing } from '../../interfaces/Listing'

const apiInstance = axios.create({})


export const createListing = ()=>{
    return apiInstance({
        url: 'api/listing',
        method: 'POST'
    })
}

export const getStudents = (listing : Listing)=>{
    return apiInstance({
        url: 'api/listing',
        method: 'GET',
        data: listing
    })
}
